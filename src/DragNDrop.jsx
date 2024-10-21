import React, { useState } from 'react'
import './DragNDrop.css'



// Section 1: Reordering list state
const freshItems = [
    {id: 1, title: 'Steelers', rank: 5},
    {id: 3, title: 'Jets', rank: 3},
    {id: 4, title: 'Dolphins', rank: 2},
    {id: 5, title: 'Viking', rank: 1},
    {id: 6, title: 'Chiefs', rank: 6},
]

const dropZoneItems = [
    {id: 2, title: 'Patriots', rank: 4}
]

export default function DragAndDropTemplate() {

    const [items, setItems] = useState(freshItems)
    const [dragItem, setDragItem] = useState(null)

    const [targetItems, setTargetItems] = useState(dropZoneItems)
    // console.log("Current item: ", dragItem)




    // Section 1: Reordering list functions
    const handleDragStart = (e, item) => {
        // TODO: Implement drag start logic
        console.log(item.title)
        setDragItem(item)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        console.log("Drag Over event")
        // TODO: Implement drag over logic
    }

    // const handleDragEnter = (e) => {
    //     e.preventDefault()
    //     console.log("Drag Enter event")
    //     // TODO: Implement drag over logic
    // }


    const handleDrop = (e) => {
        e.preventDefault()
        if (dragItem) {
            console.log("Drop event", dragItem.title)
            console.log(dragItem.id)

            // const result = words.filter((word) => word.length > 6);

            const newItems = items.filter((item)=>item.id!==dragItem.id)
            setItems(newItems)
            console.log([...targetItems, dragItem])
            setTargetItems((prevTargetItems) => [...prevTargetItems, dragItem])

        } else {
            console.log("No item to drop")
        }


        // console.log("EVENT INFO", e.target)
        // console.log("Drop event", item.title)
        // TODO: Implement drop logic for reordering


    }



    return (
        <div className="container mx-auto p-4 space-y-8">
            {/* Section 1: Reordering list */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Section 1: Reordering List</h2>
                <div className="space-y-2">
                    {items
                        .sort((a, b) => a.rank - b.rank)
                        .map((item, index) => (
                            <div
                                key={item.rank}
                                draggable={true}
                                onDragStart={(e) => handleDragStart(e, item)}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e)}
                                className="p-4 bg-white rounded-lg shadow cursor-move"
                            >
                                {`${item.title} Rank: ${item.rank}`}
                            </div>
                        ))}
                </div>
                <div
                    className="drop-zone space-y-2"
                    onDragOver={handleDragOver}
                    // onDragEnter={handleDragEnter}
                    onDrop={(e) => handleDrop(e)}
                >
                    <h2>Drop Zone</h2>
                    {targetItems
                        .sort((a, b) => a.rank - b.rank)
                        .map((item, index) => (
                            <div
                                key={item.rank}
                                draggable={true}
                                onDragStart={(e) => handleDragStart(e, item)}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e)}
                                className="p-4 bg-white rounded-lg shadow cursor-move"
                            >
                                {`${item.title} Rank: ${item.rank}`}
                            </div>
                        ))}
                </div>
            </section>

        </div>
)
}