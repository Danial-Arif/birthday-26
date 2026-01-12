export default function Video() {
  return (
    <div
      className="
        h-[160vh] md:h-screen w-screen
        flex justify-center items-center
        px-6 py-10
        bg-gradient-to-br
        from-[#f6f3ff]
        via-[#e8ddff]
        to-[#d6c9ff]
      "
    >
      <div
        className="
          flex flex-col md:flex-row
          h-full md:h-[85%]
          w-full md:w-[70%]
          rounded-2xl overflow-hidden
          shadow-2xl
          bg-white/30
          backdrop-blur-2xl
          border border-white/40
          gap-4
        "
      >
        {/* Image */}
        <img
          src="/Luna.jpeg"
          alt="Luna"
          className="
            h-1/2 md:h-full
            object-cover
          "
        />

        {/* Content */}
        <div
          className="
            h-1/2 md:h-full
            flex flex-col justify-center items-center
            px-8 md:px-12
            py-10
            text-center
            py-6
          "
        >
          <h1 className="text-3xl font-semibold mb-4 text-neutral-900">
            Happy Birthday Baby 😍
          </h1>

          <p className="text-sm leading-relaxed text-neutral-700">
            Aww today’s your birthday, baby girl! 🎉💖 Finally haha, you’ve been
            waiting for this day for so long, desperately, and it’s finally
            here 😆✨ Happy birthday to my baby girl! 🎂💫 I hope you have the
            most beautiful day filled with smiles, love, and everything that
            makes your heart happy 🌸🥰 I pray that this year brings you endless
            blessings, great health, peace of mind, and success in everything
            you do 🙏💐 May God protect you, guide you, and keep you safe always
            🤍✨ I also pray for your family’s—especially mom and dad—health,
            happiness, and unity 🏡💞 Once again, happy birthday my baby 🥹❤️
          </p>

          <h2 className="text-lg mt-6 font-medium text-neutral-900">
            <b>To my beautiful baby girl (ASEN), with love, Danial 🥰💞</b>
          </h2>
        </div>
      </div>
    </div>
  );
}
