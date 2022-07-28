import React from 'react'

const Activity = () => {
    return (
        <div id="activity" className="shadow bg-white rounded-md p-5 mb-5">
            <div className="flex gap-3 justify-between items-center mb-10">
                <h4 className="text-gray-600 font-semibold text-lg">Aktivitas</h4>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-gray-600">
                        Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa
                    </p>
                    <small className="text-gray-400">Hari ini, 06:00</small>
                </div>
                <div>
                    <p className="text-gray-600">
                        Bintang baru saja menghapus sublokasi KCP 4 dari induk Kantor Cabang Tebet
                    </p>
                    <small className="text-gray-400">Kemarin, 17:32</small>
                </div>
                <div>
                    <p className="text-gray-600">
                        Yusron melakukan perubaha profil pada induk Kantor Cabang Bekasi
                    </p>
                    <small className="text-gray-400">Kemarin, 17:32</small>
                </div>
            </div>
        </div>
    )
}

export default Activity