import React from 'react'

const Relation = () => {
    return (
        <div id="relation" className="shadow bg-white rounded-md p-5 mb-8">
            <div className="flex gap-3 justify-between items-center mb-10">
                <h4 className="text-gray-600 font-semibold text-lg">Relasi</h4>
                <span className="text-green-600">Lihat semua</span>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <div className="flex gap-2 items-center text-gray-600">
                        <span className="material-icons text-2xl">share</span>
                        <span>
                            <h4 className="text-2xl font-bold mb-0 pb-0">20</h4>
                            <small className="mt-0 pt-0">Memiliki</small>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 items-center text-gray-600">
                        <span className="material-icons text-2xl">share</span>
                        <span>
                            <h4 className="text-2xl font-bold mb-0 pb-0">108</h4>
                            <small className="mt-0 pt-0">Menggunakan</small>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 items-center text-gray-600">
                        <span className="material-icons text-2xl">share</span>
                        <span>
                            <h4 className="text-2xl font-bold mb-0 pb-0">60</h4>
                            <small className="mt-0 pt-0">Meminjam</small>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Relation