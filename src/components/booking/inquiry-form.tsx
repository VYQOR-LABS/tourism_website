import Button from "@/components/ui/button";

export default function InquiryForm() {
  return (
    <form className="space-y-5 rounded-[2rem] border border-[#e9dfd1] bg-[#f9f5f0] p-6 shadow-[0_18px_44px_rgba(19,25,21,0.05)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934]">
          Name
          <input className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-[#2c3934]">
          Email
          <input type="email" className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="Email address" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934]">
          Phone
          <input className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="Phone number" />
        </label>
        <label className="block text-sm font-medium text-[#2c3934]">
          Country
          <input className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="Country" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934]">
          Preferred destination
          <input className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="Destination" />
        </label>
        <label className="block text-sm font-medium text-[#2c3934]">
          Travel date
          <input type="date" className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[#2c3934]">
          Travelers
          <input type="number" min={1} className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="2" />
        </label>
        <label className="block text-sm font-medium text-[#2c3934]">
          Budget range
          <select className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none">
            <option>$500 - $1,000</option>
            <option>$1,000 - $2,000</option>
            <option>$2,000 - $4,000</option>
            <option>$4,000+</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-[#2c3934]">
        Message
        <textarea rows={5} className="mt-2 w-full rounded-2xl border border-[#e4d7c0] bg-white px-4 py-3 outline-none" placeholder="Tell us more about your dream trip" />
      </label>

      <Button href="/booking" className="w-full justify-center">Submit Inquiry</Button>
    </form>
  );
}
