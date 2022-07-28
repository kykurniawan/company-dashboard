import React from 'react'

const Topmenu = ({ toggleMenu }) => {
    return (
        <div id="top-menu" className="flex justify-between gap-4 flex-col-reverse md:flex-row mb-5">
            <div className="flex gap-4">
                <button onClick={toggleMenu} className="material-icons">menu</button>
                <div className="flex gap-2 items-center">
                    <span className="text-gray-400">Perusahaan</span>
                    <span className="text-gray-400">&gt;</span>
                    <span>Mitramas Infosys Global</span>
                </div>
            </div>
            <div className="flex items-center gap-6 self-end">
                <div className="flex gap-2 items-center">
                    <span className="material-icons text-gray-600">search</span>
                    <span className="material-icons text-gray-600">notifications</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-icons text-white p-1 rounded-full bg-green-700">person</span>
                    <span className="text-gray-600 font-semibold">John Doe</span>
                </div>
            </div>
        </div>
    )
}

export default Topmenu