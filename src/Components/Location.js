import React from 'react'

const Location = () => {
    return (
        <div id="location" className="shadow bg-white rounded-md p-5 mb-8">
            <div className="flex gap-3 justify-between items-center mb-4">
                <h4 className="text-gray-600 font-semibold text-lg">Lokasi</h4>
                <span className="text-green-600">Lihat semua</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-green-600 p-3 rounded-md">
                    <div className="flex gap-3 justify-between items-center">
                        <span className="material-icons text-5xl text-white">business</span>
                        <span className="text-white text-right">
                            <h2 className="text-3xl font-bold">20</h2>
                            <small>Induk</small>
                        </span>
                    </div>
                </div>
                <div className="bg-green-600 p-3 rounded-md">
                    <div className="flex gap-3 justify-between items-center">
                        <span className="material-icons text-5xl text-white">build</span>
                        <span className="text-white text-right">
                            <h2 className="text-3xl font-bold">3</h2>
                            <small>Sub Lokasi Level 1</small>
                        </span>
                    </div>
                </div>
                <div className="bg-green-600 p-3 rounded-md">
                    <div className="flex gap-3 justify-between items-center">
                        <span className="material-icons text-5xl text-white">home_work</span>
                        <span className="text-white text-right">
                            <h2 className="text-3xl font-bold">1</h2>
                            <small>Sub Lokasi Level 2</small>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location