'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#00ff41] font-mono p-8 md:p-12 overflow-hidden antialiased">
      <div className="container mx-auto h-screen flex items-center justify-center">
        <div className="terminal w-full max-w-4xl">
          <div className="prompt mb-4">
            <span className="text-white">vacha@portfolio</span><span className="text-blue-400">:</span><span className="text-gray-400">~$</span>
          </div>
          
          <div className="output space-y-6">
            <div className="command typing" data-delay="0">pwd</div>
            <div className="response ml-12 text-[#00ff41]" data-delay="1">/home/vacha/portfolio</div>
            
            <div className="command typing" data-delay="2">ls -la</div>
            <div className="response ml-12 text-[#00ff41]" data-delay="3">
              <span>📁 projects/</span><br/>
              <span>📄 resume.pdf</span><br/>
              <span>✉️  contact@vacha.dev</span><br/>
              <span>🔗 github.com/vachan18</span>
            </div>
            
            <div className="command typing" data-delay="5">cat resume.md | head -20</div>
            <div className="response ml-12 text-[#00ff41] max-w-2xl leading-relaxed" data-delay="6">
              <strong>Vacha Shah</strong><br/>
              Full Stack Developer • Designer • Problem Solver<br/><br/>
              
              <strong>EXPERIENCE</strong><br/>
              • Senior Frontend @ Rocket.New (2023-Now)<br/>
              • Full Stack @ TechFlow (2021-23)<br/>
              • React Developer @ StartupX (2020)<br/><br/>
              
              <strong>SKILLS</strong><br/>
              Next.js • React • Tailwind • Node • TypeScript • Framer Motion<br/><br/>
              
              <strong>PROJECTS</strong><br/>
              Terminal Portfolio • E-Commerce PWA • AI Dashboard
            </div>
            
            <div className="command typing cursor" data-delay="10">type 'hello world' && say "welcome"</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .typing {
          border-right: 2px solid #00ff41;
          white-space: nowrap;
          overflow: hidden;
          animation: typing 2s steps(30) forwards, blink-caret 0.75s step-end infinite;
        }
        .cursor {
          animation: blink-caret 0.75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0; }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #00ff41; }
        }
        .typing::after {
          content: '';
          animation: blink-caret 0.75s step-end infinite;
        }
      `}</style>
    </main>
  )
}

