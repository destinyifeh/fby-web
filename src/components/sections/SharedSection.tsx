"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const SharedSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!formData.firstname || !formData.lastname || !formData.email) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/investor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Thank you for your interest!", {
          description:
            "We've received your request and will be in touch shortly.",
        });
        setFormData({ firstname: "", lastname: "", email: "" });
        setIsFormOpen(false);
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit request. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full max-w-[1312px] mx-auto py-8 md:py-12">
      <div className="flex flex-col items-center gap-5 md:gap-7 px-4">
        <Button
          variant="outline"
          className="inline-flex items-center justify-center h-[60px] px-6 gap-[10px] rounded-[30px] border-2 border-transparent bg-clip-padding bg-gradient-to-r from-[#E3BCB5] via-[#F9BC99] to-[#E3BCB5] [background-origin:border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)][mask-composite:exclude] transition-all hover:opacity-90"
          //className="animate-fade-in [--animation-delay:0ms] w-fit h-16 px-8 bg-[#fff2da] rounded-[30px] border-none backdrop-blur-[2.0px] backdrop-brightness-[110%] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.1)] relative before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-[30px] before:[background:linear-gradient(90deg,rgba(227,188,181,1)_18%,rgba(249,188,153,1)_53%,rgba(227,188,181,1)_78%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-transform hover:scale-105 hover:bg-[#fff2da]"
        >
          <span className="relative z-10 [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Partner with us
          </span>
        </Button>

        <h2 className="animate-fade-in [--animation-delay:200ms] max-w-[1146px] [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#8d5241] text-2xl md:text-5xl text-center leading-tight">
          Together, We Can Shape the Future of Beauty Technology
        </h2>

        <p className="animate-fade-in [--animation-delay:400ms] max-w-[1312px] [font-family:'Abhaya_Libre',Helvetica] font-normal text-[#8d5241] text-lg md:text-xl text-center leading-relaxed">
          We are selectively welcoming early partners who share our vision for
          AI-powered beauty. If you&apos;re interested in joining our journey,
          you can reach out below.
        </p>

        <div className="w-full max-w-[800px] mt-6 md:mt-8 overflow-hidden transition-all duration-500 ease-in-out">
          <Button
            variant="ghost"
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="w-full h-auto flex items-center justify-center gap-4 py-4 group hover:bg-[#8d5241]/5 rounded-xl transition-colors bg-transparent border-none"
          >
            <span className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#8d5241] text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-tight text-center">
              Request Investor Overview
            </span>
            {isFormOpen ? (
              <ChevronUp className="w-6 h-6 md:w-8 md:h-8 text-[#8d5241] shrink-0" />
            ) : (
              <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-[#8d5241] shrink-0" />
            )}
          </Button>

          <div
            className={cn(
              "grid transition-all duration-500 ease-in-out",
              isFormOpen
                ? "grid-rows-[1fr] opacity-100 mt-6 md:mt-8"
                : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden min-h-0">
              <div className="bg-white rounded-[20px] p-6 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-[#e3bcb5]">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label
                        htmlFor="firstname"
                        className="block [font-family:'Abhaya_Libre-SemiBold',Helvetica] font-semibold text-[#8d5241] text-xl"
                      >
                        Firstname
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8d5241]/60" />
                        <Input
                          id="firstname"
                          type="text"
                          required
                          value={formData.firstname}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstname: e.target.value,
                            })
                          }
                          placeholder="John"
                          className="h-14 pl-12 rounded-[500px] border-[#e3bcb5] focus:border-[#8d5241] focus-visible:ring-1 focus-visible:ring-[#8d5241] [font-family:'Inter',Helvetica] text-lg text-[#8d5241] placeholder:text-[#8d5241]/40"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 text-left">
                      <label
                        htmlFor="lastname"
                        className="block [font-family:'Abhaya_Libre-SemiBold',Helvetica] font-semibold text-[#8d5241] text-xl"
                      >
                        Lastname
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8d5241]/60" />
                        <Input
                          id="lastname"
                          type="text"
                          required
                          value={formData.lastname}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastname: e.target.value,
                            })
                          }
                          placeholder="Doe"
                          className="h-14 pl-12 rounded-[500px] border-[#e3bcb5] focus:border-[#8d5241] focus-visible:ring-1 focus-visible:ring-[#8d5241] [font-family:'Inter',Helvetica] text-lg text-[#8d5241] placeholder:text-[#8d5241]/40"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <label
                      htmlFor="email"
                      className="block [font-family:'Abhaya_Libre-SemiBold',Helvetica] font-semibold text-[#8d5241] text-xl"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8d5241]/60" />
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Johndoe@gmail.com"
                        className="h-14 pl-12 rounded-[500px] border-[#e3bcb5] focus:border-[#8d5241] focus-visible:ring-1 focus-visible:ring-[#8d5241] [font-family:'Inter',Helvetica] text-lg text-[#8d5241] placeholder:text-[#8d5241]/40"
                      />
                    </div>
                  </div>

                  <div className="pt-4 text-center">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full md:w-auto px-12 h-16 bg-[#8d5241] hover:bg-[#724235] text-white rounded-[500px] [font-family:'Abhaya_Libre-SemiBold',Helvetica] text-xl transition-all disabled:opacity-50"
                    >
                      {isLoading
                        ? "Submitting..."
                        : "Request Investor overview"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
