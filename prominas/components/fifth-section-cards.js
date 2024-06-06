const FifthSectionCards = ({ image, text, bgSize, bgPosition }) => {
    return (
        <div className="relative flex justify-center h-[349px] w-[284px] cursor-pointer" style={{ backgroundImage: `url(${image})`, borderRadius: '4px', textAlign: 'center', backgroundSize: `${bgSize}`, backgroundPosition: `${bgPosition}` }}>
            <p style={{ fontFamily: "Krona One, sans-serif", fontWeight: 400, fontSize: '18px', bottom: '40px', position: 'absolute', width: '275px' }}>{text}</p>
        </div>
    );
}

export default FifthSectionCards;