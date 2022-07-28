import React from 'react'

const Bank = () => {
    return (
        <div id="bank" className="p-5 bg-white shadow rounded-md mb-8">
            <div className="flex gap-3 justify-between items-center mb-10">
                <h4 className="text-gray-600 font-semibold text-lg">Akun Bank</h4>
                <button className="flex gap-2 items-center text-white bg-green-700 px-2 p-1 rounded hover:bg-green-600">
                    <span className="material-icons">add</span>
                    Tambah Akun Bank
                </button>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-5 items-start">
                    <div className="rounded-xl bg-gradient-to-r from-yellow-300 to-green-700 h-20 w-40 relative">
                        <em className="text-white font-bold absolute bottom-2 right-2">VISA</em>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between mb-3">
                            <h5 className="font-bold text-gray-600">Bank KB Bukopin</h5>
                            <div className="flex gap-1">
                                <span className="material-icons text-green-600">edit</span>
                                <span className="material-icons text-red-600">delete</span>
                            </div>
                        </div>
                        <p className="text-gray-500">**** 0876 - Yusron Taufiq</p>
                        <p className="text-gray-500">IDR</p>
                    </div>
                </div>
                <div className="flex gap-5 items-start">
                    <div className="rounded-xl bg-gradient-to-r from-teal-500 to-blue-300 h-20 w-40 relative">
                        <em className="text-white font-bold absolute bottom-2 right-2">VISA</em>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between mb-3">
                            <h5 className="font-bold text-gray-600">Citibank, NA</h5>
                            <div className="flex gap-1">
                                <span className="material-icons text-green-600">edit</span>
                                <span className="material-icons text-red-600">delete</span>
                            </div>
                        </div>
                        <p className="text-gray-500">**** 5525 - Si Tampan</p>
                        <p className="text-gray-500">IDR</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bank