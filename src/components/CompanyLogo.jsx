import { assetPath } from '../utils/assetPath.js';

export default function CompanyLogo({ className = '', imageClassName = '' }) {
  return (
    <span className={`company-logo-surface logo-surface relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md ${className}`}>
      <img
        className={`company-logo-mark relative z-10 h-full w-full object-contain ${imageClassName}`}
        src={assetPath('/images/company-logo.png')}
        alt="Asghar Engineering Works logo"
        decoding="async"
      />
    </span>
  );
}
