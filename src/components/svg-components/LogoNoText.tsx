import type { FC, SVGProps, CSSProperties } from 'react'
import { clsx } from 'clsx'

export const LogoNoText: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-35 -35 1660 1420"
    {...props}
    style={{
      ...({ '--svg-animation-length': '3s' } as CSSProperties),
      ...props.style,
    }}
    className={clsx(props.className, 'kir-dev-svg')}
  >
    <path
      style={
        { '--svg-path-length': '8765', strokeWidth: 50 } as CSSProperties
      }
      d="M961.622 119.382c55.229 0 110.605-1.252 165.813.22a590.101 590.101 0 0162.707 5.007l-15.303-2.104c41.545 5.659 82.438 16.008 121.154 32.227l-13.757-5.806a383.973 383.973 0 0184.837 48.981l-11.654-9.003a333.204 333.204 0 0159.825 59.531l-9.014-11.654a304.596 304.596 0 0139.127 66.83l-5.806-13.757a287.988 287.988 0 0119.984 72.73q-1.052-7.667-2.104-15.313a277.554 277.554 0 010 73.288l2.104-15.314a273.768 273.768 0 01-18.733 68.64l5.806-13.769a281.814 281.814 0 01-36.192 61.95l9.004-11.664a307.393 307.393 0 01-54.914 54.692l11.654-9.003a365.736 365.736 0 01-80.913 46.71l13.757-5.806c-39.442 16.555-81.198 26.884-123.532 32.605l15.314-2.103c-34.33 4.543-68.744 5.5-103.316 5.5H961.622c-31.406 0-57.606 26.21-57.606 57.606s26.2 57.606 57.606 57.606c53.43 0 106.882.442 160.302 0 94.744-.841 191.897-19.594 274.672-67.377 63.57-36.696 119.493-92.903 148.764-160.922 7.794-18.112 14.977-36.16 19.752-55.313 4.775-19.153 7.436-38.643 9.077-58.132 2.872-34.151-.925-69.354-8.845-102.601-16.629-69.807-57.49-134.754-111.068-182.116-64.275-56.796-144.862-92.662-229.1-107.282A702.379 702.379 0 001104.413 4.17h-142.79c-31.396 0-57.606 26.21-57.606 57.606 0 31.395 26.21 57.606 57.606 57.606zM614.05 634.407a568.708 568.708 0 00-314.114 95.88A638 638 0 0082.607 980.758a707.522 707.522 0 00-70.659 307.425c0 31.396 26.242 57.606 57.617 57.606 31.375 0 57.606-26.21 57.606-57.606a670.163 670.163 0 015.932-88.434l-2.051 15.314a640.724 640.724 0 0144.343-162.268l-5.806 13.757a612.041 612.041 0 0178.326-134.281l-9.013 11.664a575.019 575.019 0 01102.57-102.78l-11.665 9.014a535.472 535.472 0 01117.179-68.618l-13.747 5.806a510.113 510.113 0 01129.085-35.32l-15.314 2.105a516.277 516.277 0 0167.062-4.46c31.395 0 57.606-26.168 57.606-57.606 0-31.438-26.21-57.659-57.617-57.617zM729.515 61.776V1288.15c0 31.396 26.21 57.606 57.606 57.606s57.616-26.21 57.616-57.606V61.776c0-31.396-26.21-57.606-57.616-57.606s-57.606 26.2-57.606 57.606z"
      className="animate-svg-path"
    />
    <path
      style={
        { '--svg-path-length': '4758', strokeWidth: 50 } as CSSProperties
      }
      d="M11.801 61.797c.147 121.322 28.524 241.572 84.143 349.475 51.01 99.035 127.391 185.113 220.642 246.169a548.598 548.598 0 00297.36 89.012c31.406 0 57.616-26.295 57.616-57.606 0-31.312-26.21-57.553-57.617-57.606a491.655 491.655 0 01-63.759-4.207l15.314 2.103a489.478 489.478 0 01-123.3-33.657l13.768 5.806a525.385 525.385 0 01-116.6-68.418l11.664 9.014A584.664 584.664 0 01248.03 438.376l9.003 11.654a647.518 647.518 0 01-83.448-143.474l5.816 13.768a698.908 698.908 0 01-47.887-176.383l1.967 15.219a740.643 740.643 0 01-6.51-97.363c.01-31.407-26.096-57.627-57.565-57.627-31.47 0-57.637 26.2-57.606 57.606zM1588.199 1288.183c-.158-117.19-30.649-233.758-88.833-335.518-55.335-96.764-136.522-179.423-232.78-235.725a608.865 608.865 0 00-305.017-82.66c-31.406 0-57.606 26.243-57.606 57.607s26.21 57.564 57.606 57.606a559.168 559.168 0 0173.478 4.943l-15.314-2.104a550.081 550.081 0 01139.276 38.233l-13.715-5.785a567.299 567.299 0 01124.11 72.72l-11.664-9.014a592.152 592.152 0 01105.273 105.441l-9.014-11.654a608.655 608.655 0 0178.652 134.87l-5.806-13.757a620.266 620.266 0 0142.629 156.841l-2.104-15.313a641.512 641.512 0 015.533 83.311c0 31.396 26.168 57.606 57.606 57.606 31.437 0 57.648-26.21 57.606-57.606z"
      className="animate-svg-path colored"
    />
  </svg>
)
