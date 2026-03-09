"use client";

import image29 from "@/assets/image-29.webp";
import image30 from "@/assets/image-30.webp";
import image33 from "@/assets/image-33.webp";
import image35 from "@/assets/image-35.webp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = () => {
  return (
    <section className="w-full pt-4 pb-20 lg:py-20 px-4 flex justify-center">
      <div className="max-w-[1568px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Card 1: Refine the look (Top-Left, Tall) */}
          <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
            <Card className="h-full border-4 border-[#8d5241] bg-[#fff4df] rounded-[20px] overflow-hidden flex flex-col">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex-1 p-6 flex items-center justify-center bg-white/20">
                  <img
                    className="w-full h-auto object-contain rounded-[14px]"
                    alt="Refine the look"
                    src={image30.src}
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-[28px] lg:text-[32px] leading-tight">
                    Refine the look you already have
                  </h3>
                  <p className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-lg lg:text-xl leading-relaxed">
                    When you scan your makeup, Face By You highlights
                    what&apos;s working and offers simple, supportive
                    refinements you can use in your next look. Gentle guidance
                    that helps your beauty evolve thoughtfully.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 2: Personalized guidance (Top-Right, Wide) */}
          <div className="md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2">
            <Card className="h-full border-4 border-[#8d5241] bg-[#fff4df] rounded-[20px] overflow-hidden">
              <CardContent className="p-0 flex flex-col md:flex-row h-full">
                <div className="flex-1 p-8 lg:p-12 space-y-6">
                  <h2 className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-[28px] lg:text-[32px] leading-tight">
                    Personalized guidance for your unique features
                  </h2>
                  <p className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-lg lg:text-xl leading-relaxed">
                    Face By You adapts to your specific facial structure,
                    undertones, and personal style. You receive guidance shaped
                    around your beauty expression not a one-size-fits-all
                    routine.
                    <br />
                    This makes every insight feel relevant, realistic, and truly
                    yours.
                  </p>
                </div>
                <div className="w-full md:w-[300px] lg:w-[400px]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Personalized faces"
                    src={image33.src}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 3: Improve skill (Center) */}
          <div className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
            <Card className="h-full border-4 border-[#8d5141] bg-[#8d5241] rounded-[24px] overflow-hidden flex items-center justify-center p-8">
              <CardContent className="p-0 flex flex-col items-center text-center space-y-6">
                <h3 className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#fff2da] text-[24px] lg:text-[28px] leading-tight">
                  Improve skill at your own pace
                </h3>
                <p className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#fff4df] text-lg leading-relaxed">
                  You don&apos;t need perfection to start. Face By You helps you
                  build confidence through small, achievable steps that evolve
                  as you do.
                </p>
                <Button
                  onClick={() =>
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="h-auto bg-[#fff2da] hover:bg-[#fff2da]/90 text-[#8d5241] rounded-full px-8 py-3 transition-transform hover:scale-105"
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-lg">
                    Join waitlist
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Card 4: Supportive companion (Middle-Bottom Right, Tall) */}
          <div className="md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-4">
            <Card className="h-full border-4 border-[#8d5241] bg-[#fff4df] rounded-[20px] overflow-hidden flex flex-col">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex-1 flex items-center justify-center bg-white/10 p-4">
                  <img
                    className="max-w-full h-auto object-contain rounded-[14px]"
                    alt="Supportive companion"
                    src={image35.src}
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-[28px] lg:text-[32px] leading-tight">
                    A supportive beauty companion
                  </h3>
                  <p className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-lg lg:text-xl leading-relaxed">
                    Makeup guidance should feel safe, not overwhelming. Face By
                    You offers gentle, constructive feedback that helps you grow
                    without comparison, pressure, or noise.
                    <br />
                    It&apos;s a safe space to explore, learn, and try again.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card 5: Designed to be inclusive (Bottom-Left, Wide) */}
          <div className="md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4">
            <Card className="h-full border-4 border-[#8d5241] bg-[#fff4df] rounded-[20px] overflow-hidden">
              <CardContent className="p-0 flex flex-col md:flex-row h-full">
                <div className="w-full md:w-[250px] lg:w-[350px] flex items-center justify-center p-6 bg-white/20">
                  <img
                    className="max-w-full h-auto object-contain"
                    alt="Inclusive shades"
                    src={image29.src}
                  />
                </div>
                <div className="flex-1 p-8 lg:p-12 space-y-6">
                  <h3 className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-[28px] lg:text-[32px] leading-tight">
                    Designed to be inclusive from day one
                  </h3>
                  <p className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-lg lg:text-xl leading-relaxed">
                    Beauty looks different everywhere and Face By You was built
                    for that diversity. Our guidance respects a wide range of
                    skin types, undertones, application styles, and cultural
                    approaches to beauty.
                    <br />
                    Everyone belongs here, and the experience adjusts to reflect
                    real-world differences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
