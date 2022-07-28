import React from 'react'

const Sidenav = ({ className }) => {
    return (
        <div id="side-nav" className={className}>
            <div className="py-3 px-3">
                <span className="material-icons text-green-800 text-3xl">change_history</span>
            </div>
            <div className="flex gap-3 flex-col">
                <div className="text-center py-3 hover:bg-green-100 hover:border-l-4 hover:border-green-600">
                    <span className="material-icons text-gray-600 text-xl">home</span>
                </div>
                <div className="text-center py-3 hover:bg-green-100 hover:border-l-4 border-green-600 box-border">
                    <span className="material-icons text-gray-600 text-xl">text_snippet</span>
                </div>
                <div className="text-center py-3 hover:bg-green-100 hover:border-l-4 border-green-600 box-border">
                    <span className="material-icons text-gray-600 text-xl">inventory</span>
                </div>
                <div className="text-center py-3 hover:bg-green-100 hover:border-l-4 border-green-600 box-border">
                    <span className="material-icons text-gray-600 text-xl">description</span>
                </div>
            </div>
        </div>
    )
}

export default Sidenav