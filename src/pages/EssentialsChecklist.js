import React, { useState, useEffect } from "react";
import ChecklistData from "@/components/ChecklistData";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const EssentialsChecklist = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [showCategory, setShowCategory] = useState({});

  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem("selectedItems");
      setCheckedItems(savedItems ? JSON.parse(savedItems) : []);
    }
    // Initialize showCategory state with all categories set to true
    const initialCategory = {};
    ChecklistData.forEach(({ category }) => {
      initialCategory[category] = false;
    });
    setShowCategory(initialCategory);
  }, []);

  const handleClearAll = () => {
    setCheckedItems([]);

    if (typeof window !== "undefined") {
      localStorage.removeItem("selectedItems");
    }
  };

  const handleItemCheck = (index) => {
    const updatedCheckedItems = [...checkedItems];
    if (updatedCheckedItems.includes(index)) {
      updatedCheckedItems.splice(updatedCheckedItems.indexOf(index), 1);
    } else {
      updatedCheckedItems.push(index);
    }
    setCheckedItems(updatedCheckedItems);

    //save to localStorage (only if available)
    if (typeof window !== undefined) {
      localStorage.setItem(
        "selectedItems",
        JSON.stringify(updatedCheckedItems)
      );
    }
  };

  const groupItemsByCategory = () => {
    const groupedItems = {};
    ChecklistData.forEach((item, index) => {
      if (!groupedItems[item.category]) {
        groupedItems[item.category] = [];
      }
      groupedItems[item.category].push({
        index,
        itemName: item.item,
      });
    });
    return groupedItems;
  };

  const groupedItems = groupItemsByCategory();

  const toggleCategoryVisibility = (category) => {
    setShowCategory((prevVisibility) => ({
      ...prevVisibility,
      [category]: !prevVisibility[category],
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto mt-24">
        <div className="flex items-center justify-center mb-4">
        <h2 className="text-black text-2xl font-semibold">📃Essentials Checklist📃</h2>
        </div>
      {Object.entries(groupedItems).map(([category, items]) => (
        <div key={category} className="mb-4">
          <button
            onClick={() => toggleCategoryVisibility(category)}
            className="btn-primary mb-2 px-2 py-0.5 flex items-center w-full justify-between bg-gray-600 rounded-md"
          >
            <div className="flex items-center justify-between">
            <span>{category}</span>
            {showCategory[category] ? ( <ArrowCircleUpIcon style={{ marginLeft: '8px' }}/> ) : ( <ArrowCircleDownIcon style={{ marginLeft: '8px' }}/> )}
            </div>
          </button>
          {showCategory[category] && (
            <div>
              {items.map(({ index, itemName }) => (
                <div key={index} className="flex items-center text-black">
                  <input
                    type="checkbox"
                    id={`item-${index}`}
                    className="mr-2"
                    checked={checkedItems.includes(index)}
                    onChange={() => handleItemCheck(index)}
                  />
                  <label htmlFor={`item-${index}`}>{itemName}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-between">
      <button
        onClick={handleClearAll}
        className="bg-blue-500 px-5 py-2 rounded-md hover:bg-blue-700 w-full btn-secondary"
      >
       🗑️ Clear All 🗑️
      </button>
      </div>
    </div>
  );
};

export default EssentialsChecklist;
