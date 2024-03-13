import ieu from "../assets/sponsors/ieu.webp"
import privateSponsor from "../assets/sponsors/private.webp"
import placeholder from "../assets/sponsors/500X500.webp"

export default function SponsorCards() {
    const sponsorPhoto = [ieu, privateSponsor]
    const renderCards = () => {
        const totalCards = 5
        while (sponsorPhoto.length < totalCards) {
            sponsorPhoto.push(placeholder)
        }
        return sponsorPhoto.map((photo, index) => (
            <div key={index} className="flex max-w-[150px] max-h-[150px] sm:max-w-[200px] sm:max-h-[200px] bg-white p-3 rounded-xl border-2 border-text">
                <img src={photo} className="w-full h-full" draggable={false} />
            </div>
        ));

    }
  return (
    <div className="grid grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 h-fit w-full place-items-center">
        {renderCards()}
    </div>
  )
}