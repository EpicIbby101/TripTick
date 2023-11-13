import React, { useState, useEffect, Fragment } from "react";
import ChecklistData from "@/components/ChecklistData";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import HomeButton from "@/components/HomeButton";
import { Header } from "@/components/Header";

const EssentialsChecklist = () => {
  const [checkedItems, setCheckedItems] = useState([]); // State to keep track of checked items
  const [showCategory, setShowCategory] = useState({}); // State to control visibility of checklist categories
  const [customItem, setCustomItem] = useState(""); // State to manage input values of custom items

  // useEffect hook to run some logic after the component has mounted
  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      // Retrieve the selectedItems from localStorage and parse it as an array
      const savedItems = localStorage.getItem("selectedItems");
      setCheckedItems(savedItems ? JSON.parse(savedItems) : []);
    }
    // Initialize showCategory state with all categories set to false
    const initialCategory = {};
    ChecklistData.forEach(({ category }) => {
      initialCategory[category] = false;
    });
    setShowCategory(initialCategory);
  }, []);

  // Function to handle clearing all checked items from checklist
  const handleClearAll = () => {
    setCheckedItems([]);

    // If localStorage is available, remove the selectedItems key
    if (typeof window !== "undefined") {
      localStorage.removeItem("selectedItems");
    }
  };

  // Function to handle checking/unchecking items in the checklist
  const handleItemCheck = (index) => {
    const updatedCheckedItems = [...checkedItems];

    // If the index exists in the checkedItems array, remove it
    // This is for pre-made items
    if (updatedCheckedItems.includes(index)) {
      updatedCheckedItems.splice(updatedCheckedItems.indexOf(index), 1);
    } else {
      // If the index is not found, add it
      // This is for custom items (index will be an object)
      updatedCheckedItems.push(index);
    }
    // Update the state with the new checked items
    setCheckedItems(updatedCheckedItems);

    // Save to localStorage (only if available)
    if (typeof window !== undefined) {
      localStorage.setItem(
        "selectedItems",
        JSON.stringify(updatedCheckedItems)
      );
    }
  };

  // Function to group checklist items by their categories
  const groupItemsByCategory = () => {
    const groupedItems = {};
    // Loop through each item in the checklist data
    ChecklistData.forEach((item, index) => {
      // If the category doesn't exist in the groupedItems object, create it as an empty array
      if (!groupedItems[item.category]) {
        groupedItems[item.category] = [];
      }
      // Push the item to the corresponding category array
      groupedItems[item.category].push({
        index, // The index of the item in the checklist data
        itemName: item.item, // The name of the item
      });
    });

    // Loop through the checkedItems (custom items) and add them to the "Custom Items" category
    checkedItems.forEach((item, index) => {
      if (!groupedItems["Custom Items"]) {
        groupedItems["Custom Items"] = [];
      }

      // If the item is a custom item, add it to the "Custom Items" category array
      if (item.custom) {
        groupedItems["Custom Items"].push({
          index,
          itemName: item.itemName,
        });
      }
    });
    return groupedItems; // Return the object with items grouped by category
  };

  // Grouping the checklist items by category using the function above
  const groupedItems = groupItemsByCategory();

  // Function to toggle the visibility of a category in the checklist
  const toggleCategoryVisibility = (category) => {
    setShowCategory((prevVisibility) => ({
      ...prevVisibility,
      [category]: !prevVisibility[category], // Toggle the current category's visibility
    }));
  };

  const handleDeleteCustomItem = (index) => {
    const updatedItems = checkedItems.filter(
      (item, i) => !(item.custom && i === index)
    );
    setCheckedItems(updatedItems);

    // Save the updated checklist to localStorage (if available)
    if (typeof window !== undefined) {
      localStorage.setItem("selectedItems", JSON.stringify(updatedItems));
    }
  };

  // Render JSX below
  return (
    <Fragment>
    {/* <Header title="Essentials Checklist"/>  */}
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm sm:max-w-md mx-auto mt-16">
      <div className="absolute top-5 left-5">
        <HomeButton />
      </div>
      {/* Heading for the checklist */}
      <div className="flex items-center justify-center mb-4 ">
        <h2 className="text-black text-2xl font-semibold">
          📃Essentials Checklist📃
        </h2>
      </div>

      {/* Loop through the grouped items and render each category and its items */}
      {Object.entries(groupedItems).map(([category, items]) => (
        <div key={category} className="mb-4">
          {/* Button to toggle the visibility of the category */}
          <button
            onClick={() => toggleCategoryVisibility(category)}
            className="btn-primary mb-3 px-2 py-0.5 flex items-center w-full justify-between bg-gray-600 rounded-md"
          >
            <div className="flex items-center justify-between">
              <span>{category}</span>
              {showCategory[category] ? (
                <ArrowCircleUpIcon style={{ marginLeft: "8px" }} />
              ) : (
                <ArrowCircleDownIcon style={{ marginLeft: "8px" }} />
              )}
            </div>
          </button>

          {/* Render the items of the category if it is visible */}
          {showCategory[category] && (
            <div>
              {/* Loop through the items and render each checkbox and label */}
              {items.map(({ index, itemName }) => (
                <div key={index} className="flex items-center text-black">
                  <input
                    type="checkbox"
                    id={`item-${index}`}
                    className="mr-2"
                    checked={
                      typeof index === "number"
                        ? checkedItems.includes(index)
                        : checkedItems.some(
                            (item) => item.custom && item.itemName === itemName
                          )
                    }
                    onChange={() => handleItemCheck(index)}
                  />
                  <label htmlFor={`item-${index}`}>{itemName}</label>

                  {/* Delete button for custom items */}
                  {typeof index !== "number" && (
                    <button
                      className="ml-2 text-red-600 hover:text-red-800"
                      onClick={() => handleDeleteCustomItem(index)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Section to add a custom item to the checklist */}
      <div>
        <div className="flex mb-3">
          {/* Input field to enter a custom item */}
          <input
            type="text"
            value={customItem}
            onChange={(e) => setCustomItem(e.target.value)}
            placeholder="Enter custom item"
            className="border border-gray-300 rounded-md p-2 px-10 mr-2 mb-3 mt-2.5 text-black flex-grow"
          />
          <button
            onClick={() => {
              // Add the custom item to the checklist
              if (customItem.trim() !== "") {
                const updatedItems = [
                  ...checkedItems,
                  { custom: true, itemName: customItem },
                ];
                setCheckedItems(updatedItems);
                setCustomItem("");

                // Save the updated checklist to localStorage (only if available)
                if (typeof window !== undefined) {
                  localStorage.setItem(
                    "selectedItems",
                    JSON.stringify(updatedItems)
                  );
                }
              }
            }}
            className="bg-green-500 pb-2 rounded-full hover:bg-green-700 w-16 text-4xl btn-secondary"
          >
            +
          </button>
        </div>
      </div>

      {/* Button to clear all checked items */}
      <div className="flex justify-between">
        <button
          onClick={handleClearAll}
          className="bg-blue-500 px-5 py-2 rounded-md hover:bg-blue-700 w-full btn-secondary"
        >
          🗑️ Clear All 🗑️
        </button>
      </div>
    </div>
    </Fragment>
  );
};

export default EssentialsChecklist;
