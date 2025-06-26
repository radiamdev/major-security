const MapSection = () => {
    return (
        <div className="w-full h-[500px] relative overflow-hidden rounded-xl">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7549.5956950934415!2d47.519401439117395!3d-18.896047228414016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIVG%20106%20Ankadifotsy%20Antananarivo!5e0!3m2!1sfr!2smg!4v1750968573262!5m2!1sfr!2smg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                title="kits4kids"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
            />
        </div>
    )
}

export default MapSection
