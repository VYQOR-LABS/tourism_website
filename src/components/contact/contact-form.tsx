import Button from "@/components/ui/button";

export default function ContactForm() {
  return (
    <form className="space-y-5 rounded-[2rem] border border-[#e9dfd1] bg-[#fffdf9] p-6 shadow-[0_18px_44px_rgba(19,25,21,0.05)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934]">
          Name
          <input className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-[#f7f3ee] px-4 py-3 outline-none" placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-[#2c3934]">
          Email
          <input type="email" className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-[#f7f3ee] px-4 py-3 outline-none" placeholder="Email" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934]">
          Phone
          <input className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-[#f7f3ee] px-4 py-3 outline-none" placeholder="Phone" />
        </label>
        <label className="block text-sm font-medium text-[#2c3934]">
          Subject
          <input className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-[#f7f3ee] px-4 py-3 outline-none" placeholder="Subject" />
        </label>
      </div>

      <label className="block text-sm font-medium text-[#2c3934]">
        Message
        <textarea rows={6} className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-[#f7f3ee] px-4 py-3 outline-none" placeholder="Tell us about your trip" />
      </label>

      <Button href="/contact" className="w-full justify-center">Send Inquiry</Button>
    </form>
  );
}
