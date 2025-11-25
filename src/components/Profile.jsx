// src/components/Profil.js

import React from "react";
import { HiLocationMarker, HiEye, HiExternalLink } from "react-icons/hi";
// IMPOR GAMBAR: Jalur relatif di sini adalah dari Profil.js ke profil.jpg
// Kita harus keluar dari folder 'components' (..) lalu masuk ke 'asset'
import fotoProfil from "../assets/profil.jpg";
import data from "../data/data.json";

function Profil() {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to to-blue-500 rounded-3xl p-8 text-white shadow-lg mb-6">
        <div className="flex flex-col md:flex-row items-center md:items gap-6">
          {/* MENGGUNAKAN GAMBAR */}
          <img
            src={fotoProfil} // Menggunakan variabel yang sudah diimpor
            alt="Foto Profil Pengguna"
            className="w-50 h-50 md:w-50 md:h-50 rounded-2xl object-cover border-4 border-white/30 shadow-sm"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{data.profil.nama}</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4 text-sm font-medium">
              <span className="bg-blue-600/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
                {data.profil.nim}
              </span>
              <span className="bg-blue-600/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
                {data.profil.prodi}
              </span>
              <span className="bg-blue-600/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
                {data.profil.angkatan}
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 text-blue-100 text-sm mb-4">
              <div className="flex items-center gap-1">
                <HiLocationMarker /> {data.profil.location}
              </div>
              <div className="flex items-center gap-1">
                <HiEye /> {data.statistics.views_count} View
              </div>
            </div>
            <p className="text-blue-50 mb-6 max-w-xl">
              {data.profil.short_bio}
            </p>
            <a
              href={data.profil.portfolio_url}
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-color shadow-sm"
            >
              <HiExternalLink /> Visit Portofolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profil;
