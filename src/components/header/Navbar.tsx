import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function Navbar() {
  return (
    <div className="bg-white px-4 py-2 sm:py-3 md:py-4 border-b border-b-[#EAECF0]">
      <div className="container mx-auto flex justify-between items-center">
        <div>Logo</div>

        <div>
          <ConnectButton />
        </div>
      </div>
    </div>
  )
}