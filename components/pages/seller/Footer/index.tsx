import { IoMdMail } from 'react-icons/io';
import bni from 'public/static/bni.svg';
import bri from 'public/static/bri.svg';
import btn from 'public/static/btn.svg';
import facebook from 'public/static/facebook.svg';
import instagram from 'public/static/instagram.svg';
import linkAja from 'public/static/link-aja.svg';
import mandiri from 'public/static/mandiri.svg';
import masterCard from 'public/static/master-card.svg';
import qris from 'public/static/qris.svg';
import twitter from 'public/static/twitter.svg';
import visa from 'public/static/visa.svg';
import whatsapp from 'public/static/whatsapp.svg';
import youtube from 'public/static/youtube.svg';
import { Image } from '@mantine/core';

const Footer = () => {
  return (
    <footer className="bg-borderCard-card text-paletteText-primary md:pt-14 md:px-8 p-4 pb-0 flex flex-col items-center">
      <div className="w-full md:flex justify-between md:space-y-0 space-y-8 md:px-24">
        <div className="flex flex-col space-y-6 mr-4">
          <div className="text-xl font-bold">PaDi UMKM</div>
          <div className="flex flex-col text-paletteText-inactive space-y-4 text-sm">
            <a
              rel="noreferrer noopener"
              target="_blank"
              className="cursor-pointer hover:text-secondary-70 mr-2 md:block">
              Tentang PaDi UMKM
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              className="cursor-pointer hover:text-secondary-70 mr-2 md:block">
              {' '}
              Syarat & Ketentuan
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              className="cursor-pointer hover:text-secondary-70 mr-2 md:block">
              {' '}
              Kebijakan Privasi
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              className="cursor-pointer hover:text-secondary-70 mr-2 md:block">
              {' '}
              Finance
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-6 mr-4">
          <div className="text-xl font-bold">Penjual</div>
          <div className="flex flex-col text-paletteText-inactive space-y-4 text-sm">
            <a
              rel="noreferrer noopener"
              target="_blank"
              className="cursor-pointer hover:text-secondary-70 mr-2 pl-0 md:block">
              Marketplace
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              className="cursor-pointer hover:text-secondary-70 mr-2 pl-0 md:block">
              Control Tower
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-6 max-w-[455px]">
          <div className="text-xl font-bold">Hubungi Kami</div>
          <div className="text-paletteText-inactive space-y-2">
            <div className="text-sm">
              Gedung Telkom Divisi Digital Business & Technology
            </div>
            <div className="text-sm">
              Jl. Prof. DR. Soepomo No.139, RT.13/RW.2, Tebet Barat, Tebet,
              Jakarta Selatan, Jakarta 12810, Indonesia
            </div>
            <div className="flex divide-x divide-paletteText-inactive justify-center xl:justify-start">
              <div className="pr-4 text-sm">Senin - Jumat</div>
              <div className="flex items-center pl-4 space-x-4 text-sm">
                <div>08:00 - 17:00 WIB</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 mb-0 justify-center xl:justify-start">
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  rel="noreferrer noopener"
                  target="_blank">
                  <Image
                    src={facebook.src}
                    alt="Facebook icon"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  rel="noreferrer noopener"
                  target="_blank">
                  <Image
                    src={twitter.src}
                    alt="Twitter icon"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  rel="noreferrer noopener"
                  target="_blank">
                  <Image
                    src={instagram.src}
                    alt="Instagram icon"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              <div className="cursor-pointer">
                <a
                  className="w-full h-full"
                  rel="noreferrer noopener"
                  target="_blank">
                  <Image
                    src={youtube.src}
                    alt="Youtube icon"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="text-paletteText-inactive space-y-2">
            <div className="text-sm font-semibold">
              Layanan Pengaduan Konsumen
            </div>
            <div className="text-sm font-semibold">PaDi UMKM</div>
            <div className="flex divide-x divide-paletteText-inactive justify-center xl:justify-start">
              <div className="flex items-center space-x-1 text-sm">
                <IoMdMail className="text-paletteText-inactive text-lg" />
                <div className="text-sm">cs@padiumkm.id</div>
              </div>
            </div>
          </div>
          <div className="text-paletteText-inactive space-y-2">
            <div className="text-sm font-semibold">
              Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
              Kementerian Perdagangan RI
            </div>
            <div className="flex divide-x divide-paletteText-inactive justify-center xl:justify-start">
              <div className="flex items-center pr-4 text-sm">
                <Image
                  src={whatsapp.src}
                  alt="Whatsapp icon"
                  width={20}
                  height={20}
                />
                <div className="pl-1">+62 853 1111 1010</div>
              </div>
              <div className="flex items-center pl-4 space-x-1 text-sm">
                <IoMdMail className="text-paletteText-inactive text-lg" />
                <div className="text-sm">contact.us@kemendag.go.id</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full border-2 md:p-12 p-4 mt-14 space-y-6">
        <div className="text-xl font-bold">Metode Pembayaran</div>
        <div className="grid md:grid-cols-8 grid-cols-3 items-center space-x-5">
          <div>
            <Image
              src={bni.src}
              alt=""
              width={80}
              height={40}
              fit="cover"
              className="w-80 h-40 mx-auto"
            />
          </div>
          <div>
            <Image
              src={bri.src}
              alt=""
              width={80}
              height={40}
              fit="cover"
              className="w-80 h-40 mx-auto"
            />
          </div>
          <div>
            <Image
              src={mandiri.src}
              alt=""
              width={80}
              height={40}
              fit="cover"
              className="w-80 h-40 mx-auto"
            />
          </div>
          <div>
            <Image
              src={btn.src}
              alt=""
              width={80}
              height={40}
              fit="cover"
              className="w-80 h-40 mx-auto"
            />
          </div>
          <div>
            <Image
              src={qris.src}
              alt=""
              width={80}
              height={40}
              fit="cover"
              className="w-80 h-40 mx-auto"
            />
          </div>
          <div>
            <Image
              src={linkAja.src}
              alt=""
              width={50}
              height={40}
              fit="cover"
              className="w-80 h-40 mx-auto"
            />
          </div>
          <div>
            <Image
              src={masterCard.src}
              alt=""
              width={62}
              height={40}
              fit="cover"
              className="w-80 h-40 mx-auto"
            />
          </div>
          <div>
            <Image
              src={visa.src}
              alt=""
              width={80}
              height={40}
              fit="cover"
              className="w-80 h-40 mx-auto"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="text-paletteText-inactive text-base my-[26px]">
          ©2022-2025 Pasar Digital UMKM Indonesia
        </div>
      </div>
    </footer>
  );
};

export default Footer;
