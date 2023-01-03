import React from 'react'
import { AnimateSharedLayout } from "framer-motion"



const motion = () => {

    function Item({ content }) {
        const [isOpen, setIsOpen] = useState(false)

        return <motion.div layout>{isOpen && content}</motion.div>
    }

    function List({ items }) {
        /**
         * This wrapping motion.ul, and sibling
         * Item components won't animate layout
         * when an Item opens/closes
         */
        return (
            <motion.ul layout>
                {items.map(item => (
                    <Item content={item.content} />
                ))}
            </motion.ul>
        )
    }
}

export default motion