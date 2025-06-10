import Document from 'public/static/IP.svg';
import { Image } from '@mantine/core';

export default function Ip() {
  return (
    <div className="flex justify-center">
      <Image src={Document.src} alt="doc" />
    </div>
  );
}
