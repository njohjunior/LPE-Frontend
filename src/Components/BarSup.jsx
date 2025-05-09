import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function BarSup() {
  return (
    <div className='bg-wine text-white-smoke font-semibold text-sm py-2 px-10 flex justify-between'>
      <div className='space-x-4'>
        <span><FontAwesomeIcon icon={faLocationDot} /> Obili Yaoundé</span>
        <span>|</span>
        <span><FontAwesomeIcon icon={faPhone} /> +237 652 02 59 01</span>
      </div>
      <div className='space-x-10'>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  )
}
