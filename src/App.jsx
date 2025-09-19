import React, { useState } from 'react';

const App = () => {
  const [isYearly, setIsYearly] = useState(false);

  // SVG Icons to replace the react-icons dependency
  const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.603 0 0 3.603 0 7.994c0 1.416.393 2.845 1.146 4.09l-.499 1.944 1.986-.514A7.942 7.942 0 0 0 7.994 16h.01c4.391 0 7.994-3.603 7.994-7.994s-3.603-7.994-7.994-7.994zM11.45 12.356c-.227.132-1.353.69-1.58.784-.227.094-.492.141-.718.047-.227-.094-.654-.249-1.246-.615-.592-.375-1.076-.84-1.442-1.284-.375-.444-.442-.64-.198-.885.244-.244.524-.524.783-.784.258-.258.33-.422.44-.664.113-.242.062-.444-.112-.664-.174-.22-.654-.537-.923-.64-.268-.103-.464-.12-.718-.12-.258 0-.524.047-.783.258-.258.21-.995.964-.995 2.35 0 1.386 1.02 2.658 1.164 2.845.145.187 2.095 3.2 5.094 4.316.368.139.736.21.995.27.26.062.812.21 1.04-.15.227-.361.642-1.474.764-1.666.122-.192.244-.113.44-.22.198-.103.654-.249.923-.391.268-.145.492-.162.718-.047.227.12.35.63.197.876-.153.245-.923.784-1.28 1.018z"/>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-2" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
  );
  
  const TagsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="text-4xl mx-auto mb-4" fill="currentColor" viewBox="0 0 16 16">
      <path d="M4.532 9.489c-1.253-1.255-1.921-2.903-1.921-4.664C2.61 2.33 4.417.156 6.643 0H5.822c-2.484.053-4.425 2.152-4.425 4.639 0 1.765.68 3.414 1.944 4.678zm-2.072 2.646c1.373 1.375 3.12 2.086 5.021 2.086h.022c.983 0 1.96-.282 2.766-.826a4.808 4.808 0 0 0 1.309-1.341c.54-.805.82-1.78.82-2.768V7.54l1.396-.516c.115-.043.208-.13.264-.24a.5.5 0 0 0 .045-.487c-.126-.22-.395-.316-.623-.217l-1.401.52c-.17-.075-.36-.145-.558-.216a3.81 3.81 0 0 1-1.261-.418c-1.28-.51-2.614-.765-3.951-.765a6.545 6.545 0 0 0-4.673 1.922z"/>
    </svg>
  );

  const ChartLineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="text-4xl mx-auto mb-4" fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M11 2a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2V3a1 1 0 0 1 1-1h6zM12 4H5v10h7V4z"/>
      <path d="M12 6H5v8h7V6z"/>
      <path fillRule="evenodd" d="M2.5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
      <path d="M5.5 8.5a.5.5 0 0 0-.5.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
      <path fillRule="evenodd" d="M9.5 8.5a.5.5 0 0 1 .5.5h-2a.5.5 0 0 1 0 1h2a.5.5 0 0 1-.5-.5z"/>
      <path d="M8.5 6.5a.5.5 0 0 0-.5.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
    </svg>
  );

  const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="text-4xl mx-auto mb-4" fill="currentColor" viewBox="0 0 16 16">
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12.5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM10 8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v1zm-2 2v2H3v-2h5z"/>
    </svg>
  );

  const FolderOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="text-4xl mx-auto mb-4" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.281 12.551a.5.5 0 0 1 .494.494L8.7 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5V2a2 2 0 0 1 2-2h3.693l2 2H14a2 2 0 0 1 2 2v8.5a.5.5 0 0 1-.5.5h-5.5zM2.5 1.5v11.75l.1.1h5.869a.5.5 0 0 1 .494.494l.2.2a.5.5 0 0 1-.5.5H2.5A.5.5 0 0 1 2 13.5V2a.5.5 0 0 1 .5-.5zm12.5 2a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-1zm-13 0a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-1zm13 2a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-1zm-13 0a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-1z"/>
    </svg>
  );

  return (
    <div className="bg-[#111b21] text-[#E9EDEF] antialiased">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; }
          .whatsapp-bg { background-color: #008069; }
          .whatsapp-green { color: #25D366; }
          .border-whatsapp-green { border-color: #25D366; }
          
          .btn-primary {
            @apply bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg;
          }
          
          .btn-secondary {
            @apply border border-white text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-white hover:text-[#111b21];
          }

          .section-card-green {
            @apply bg-green-900 bg-opacity-10 border-l-4 border-whatsapp-green p-6 rounded-lg;
          }
          .section-card-red {
            @apply bg-red-900 bg-opacity-10 border-l-4 border-red-500 p-6 rounded-lg;
          }

          .pricing-card {
            @apply bg-white bg-opacity-[0.03] p-8 rounded-2xl flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105;
          }
          .pricing-card-highlight {
            @apply border border-[#25D366] ring-2 ring-[#25D366];
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#25D366] to-[#008069] h-[500px] flex items-center justify-center -mb-20">
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              WhatsApp Wasn’t Built for Business. We Fixed That.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 opacity-90">
              Shared inbox, customer history, and sales pipeline — all inside WhatsApp.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="#pricing" className="btn-primary">
                Start Free Today
                <ArrowRightIcon />
              </a>
              <a href="#demo" className="btn-secondary">
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Mockup Section */}
      <section className="relative z-20 container mx-auto px-6 mb-20 -mt-20">
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
          <img
            src="https://placehold.co/1200x800/25D366/E9EDEF?text=WhatsApp+CRM+Dashboard+Mockup"
            alt="WhatsApp CRM dashboard mockup"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Pain -> Solution Narrative */}
      <section className="py-24 bg-[#111b21]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Your Business Needs a Better Solution
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The results of relying on WhatsApp alone are chaos, frustrated customers, and stalled growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="section-card-red">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Holding Your Business Back
              </h3>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">❌</span> No centralized history
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">❌</span> Agents don't know who replied last
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">❌</span> Hard to track deals or tickets
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">❌</span> No way to measure team performance
                </li>
              </ul>
            </div>
            <div className="section-card-green">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                Our Solution
              </h3>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <span className="text-[#25D366] mr-2">✅</span> One shared inbox for your whole team
                </li>
                <li className="flex items-center">
                  <span className="text-[#25D366] mr-2">✅</span> Every chat becomes a trackable ticket
                </li>
                <li className="flex items-center">
                  <span className="text-[#25D366] mr-2">✅</span> Customer history and tags at your fingertips
                </li>
                <li className="flex items-center">
                  <span className="text-[#25D366] mr-2">✅</span> Real-time dashboards on performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Proof */}
      <section className="py-24 bg-[#111b21]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              From Chaos to Scale: A Real WhatsApp CRM Story
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              In 2022, a metering company had a great product but struggled with WhatsApp support chaos. No visibility, no tracking, no control.
            </p>
            <div className="bg-white bg-opacity-[0.05] rounded-xl p-8 text-left border border-white/10">
              <p className="text-lg mb-4">We built them a WhatsApp-based CRM where:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Customers messaged one number</li>
                <li>Multiple agents could reply seamlessly</li>
                <li>Every chat became a trackable ticket</li>
                <li>AI gave management real-time insights</li>
              </ul>
              <div className="mt-6">
                <p className="text-xl font-semibold text-[#25D366] mb-2">⚡ The results:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>20,000+ customers onboarded</li>
                  <li>2 million+ conversations processed</li>
                  <li>A support operation that scaled smoothly</li>
                </ul>
              </div>
            </div>
            <a href="#contact" className="btn-primary mt-8 inline-block">
              Let’s Talk
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#111b21]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Everything You Need. Nothing You Don’t.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-[0.05] p-6 rounded-xl text-center border border-white/10">
              <UsersIcon />
              <h3 className="font-semibold text-xl mb-2">Shared Inbox</h3>
              <p className="text-sm text-gray-400">One number, multiple agents, zero confusion.</p>
            </div>
            <div className="bg-white bg-opacity-[0.05] p-6 rounded-xl text-center border border-white/10">
              <TagsIcon />
              <h3 className="font-semibold text-xl mb-2">Customer Profiles</h3>
              <p className="text-sm text-gray-400">Auto-build history + smart tags.</p>
            </div>
            <div className="bg-white bg-opacity-[0.05] p-6 rounded-xl text-center border border-white/10">
              <FolderOpenIcon />
              <h3 className="font-semibold text-xl mb-2">Sales Pipeline</h3>
              <p className="text-sm text-gray-400">Drag-and-drop stages for deals.</p>
            </div>
            <div className="bg-white bg-opacity-[0.05] p-6 rounded-xl text-center border border-white/10">
              <ChartLineIcon />
              <h3 className="font-semibold text-xl mb-2">Analytics</h3>
              <p className="text-sm text-gray-400">See who’s responding fast and who’s lagging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#0b141a]" id="pricing">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Start Free. Grow as You Scale.
            </h2>
            <div className="inline-flex items-center bg-white bg-opacity-[0.05] rounded-full p-1 mt-4">
              <button
                onClick={() => setIsYearly(false)}
                className={`py-2 px-6 rounded-full font-medium transition-colors ${
                  !isYearly ? 'bg-[#25D366] text-black' : 'text-gray-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`py-2 px-6 rounded-full font-medium transition-colors ${
                  isYearly ? 'bg-[#25D366] text-black' : 'text-gray-400'
                }`}
              >
                Yearly (-20%)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="pricing-card">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">Free</h3>
                <p className="text-gray-400 text-sm">For individuals and small teams.</p>
                <p className="text-5xl font-bold mt-4">$0</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><span className="text-[#25D366] mr-2">✓</span> 1 agent</li>
                <li><span className="text-[#25D366] mr-2">✓</span> 50 chats/month</li>
                <li><span className="text-[#25D366] mr-2">✓</span> Shared inbox</li>
              </ul>
              <a href="#" className="mt-8 block text-center border border-[#25D366] text-[#25D366] font-semibold py-3 rounded-full transition-colors hover:bg-[#25D366] hover:text-white">
                Start Free
              </a>
            </div>

            <div className="pricing-card pricing-card-highlight">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1 text-[#25D366]">Pro</h3>
                <p className="text-gray-400 text-sm">For growing teams.</p>
                <p className="text-5xl font-bold mt-4">
                  {isYearly ? '$23' : '$29'}
                  <span className="text-lg font-normal text-gray-400">/mo</span>
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><span className="text-[#25D366] mr-2">✓</span> 5 agents</li>
                <li><span className="text-[#25D366] mr-2">✓</span> 1,000 chats</li>
                <li><span className="text-[#25D366] mr-2">✓</span> Sales pipeline</li>
                <li><span className="text-[#25D366] mr-2">✓</span> All Free features</li>
              </ul>
              <a href="#" className="mt-8 block text-center bg-[#25D366] text-black font-semibold py-3 rounded-full transition-transform hover:scale-105">
                Start Pro
              </a>
            </div>

            <div className="pricing-card">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">Growth</h3>
                <p className="text-gray-400 text-sm">For scaling businesses.</p>
                <p className="text-5xl font-bold mt-4">
                  {isYearly ? '$79' : '$99'}
                  <span className="text-lg font-normal text-gray-400">/mo</span>
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><span className="text-[#25D366] mr-2">✓</span> Unlimited agents</li>
                <li><span className="text-[#25D366] mr-2">✓</span> AI insights</li>
                <li><span className="text-[#25D366] mr-2">✓</span> Integrations</li>
                <li><span className="text-[#25D366] mr-2">✓</span> All Pro features</li>
              </ul>
              <a href="#" className="mt-8 block text-center border border-[#25D366] text-[#25D366] font-semibold py-3 rounded-full transition-colors hover:bg-[#25D366] hover:text-white">
                Start Growth
              </a>
            </div>

            <div className="pricing-card">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">Enterprise</h3>
                <p className="text-gray-400 text-sm">For large organizations.</p>
                <p className="text-5xl font-bold mt-4">Custom</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><span className="text-[#25D366] mr-2">✓</span> Dedicated support</li>
                <li><span className="text-[#25D366] mr-2">✓</span> Custom features</li>
                <li><span className="text-[#25D366] mr-2">✓</span> SLA</li>
              </ul>
              <a href="#" className="mt-8 block text-center border border-[#25D366] text-[#25D366] font-semibold py-3 rounded-full transition-colors hover:bg-[#25D366] hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA Section */}
      <section className="py-24 bg-[#111b21]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Make Customers Happier. Make Agents More Productive.
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
              All your WhatsApp chats organized, trackable, and scalable — so your business grows without chaos.
            </p>
            <a href="#pricing" className="btn-primary">
              Start Free Today
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-24 bg-[#0b141a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Learn How to Sell Smarter on WhatsApp
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-[0.05] p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-2">1. The WhatsApp CRM Playbook for SMBs</h3>
              <p className="text-sm text-gray-400 mb-4">Discover the essential strategies to manage your business on WhatsApp.</p>
              <a href="#" className="text-[#25D366] font-medium transition-colors hover:text-white">
                Read More <ArrowRightIcon />
              </a>
            </div>
            <div className="bg-white bg-opacity-[0.05] p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-2">2. How to Close 3x More Sales via WhatsApp</h3>
              <p className="text-sm text-gray-400 mb-4">Learn the sales tactics that can significantly boost your conversion rates.</p>
              <a href="#" className="text-[#25D366] font-medium transition-colors hover:text-white">
                Read More <ArrowRightIcon />
              </a>
            </div>
            <div className="bg-white bg-opacity-[0.05] p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-2">3. Why Shared Inboxes Save 10 Hours a Week</h3>
              <p className="text-sm text-gray-400 mb-4">See how a shared inbox can transform your team's productivity.</p>
              <a href="#" className="text-[#25D366] font-medium transition-colors hover:text-white">
                Read More <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0b141a]">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <div className="mb-6 flex justify-center gap-6 text-sm font-semibold">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <p className="mb-4">
            <a href="mailto:support@yourcrm.com" className="hover:text-white transition-colors">
              support@yourcrm.com
            </a>
            <span className="mx-2">|</span>
            <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="whatsapp-green hover:text-white text-3xl transition-colors">
              <WhatsappIcon />
            </a>
          </p>
          <p className="text-sm opacity-75">
            Built for SMBs who live on WhatsApp.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

