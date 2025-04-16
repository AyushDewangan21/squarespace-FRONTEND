// import logo from "./logo.svg";
import "./App.css";

function App() {
  window.addEventListener("scroll", () => {
    const div = document.getElementById("d01");
    div.style.backgroundColor = "black";
    if (div) {
      if (window.scrollY === 0) {
        div.style.backgroundColor = "transparent";
      } else {
        div.style.backgroundColor = "black";
      }
    }
  });

  return (
    <div className="App">
      <div id="d01">
        <div id="d02">
          <div id="d06"></div>
          <div id="d07">SQUARESPACE</div>
        </div>
        <div id="d04">
          <div id="d08">
            PRODUCTS <div id="d08arrow"></div>
          </div>
          <div id="d09">
            RESOURCES <div id="d08arrow"></div>
          </div>
        </div>
        <div id="d05">
          <div id="d010">LOG IN</div>
          <div id="d011">GET STARTED</div>
        </div>
      </div>

      <div id="d012">
        <div id="d013">A website makes it real</div>
        <div id="d014">
          <div id="d015">GET STARTED</div>
          <div id="d016">
            Get your free website trial today. No credit card required.
          </div>
        </div>
      </div>

      <div id="d017">
        <div id="d018">
          <div id="d1801">Find a domain name for your website</div>
        </div>
        <div id="d019">
          <div id="d20">
            <input
              type="text"
              id="d2001"
              placeholder="Start your search here"
            />

            <div id="d2002">SEARCH</div>
          </div>
          <div id="d21">
            <div id="d2101">
              Check domain name availability using our AI-powered domain search
              tool to get started.
            </div>
          </div>
          <div id="d22">
            <div id="d2202">Learn more about Domains→</div>
          </div>
        </div>
      </div>

      <div id="d23">
        <div id="d24">
          <video controls>
            <source
              src="https://media-www.sqspcdn.com/images/pages/homepage/aug-2023/intro/en/intro-1.mp4"
              type="video/mp4"
            ></source>
            {/* <source /> */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div id="d25">
          <div className="text2501 text2501first">Create a website→</div>
          <div className="text2502">
            Design a website using our industry-leading website templates,
            designer fonts, and color palettes.
          </div>
          <div className="text2501">Sell your products and offerings→</div>
          <div className="text2502">
            Create an online store, book <u> appointments</u>, or{" "}
            <u>sell your services</u> or <u>content—all</u> on a single platform
            built just for you.
          </div>
          <div className="text2501">Market your business→</div>
          <div className="text2502">
            Promote your business and grow your customer base with email
            marketing, social media, and <u>SEO tools</u> .
          </div>
        </div>
      </div>

      <div id="d26">
        <div id="d27">
          <div id="d29">Website templates for every purpose</div>
          <div id="d30">
            Online Store<div id="d30arrow">→</div>
          </div>
          <div id="d30">
            Local Business<div id="d30arrow">→</div>
          </div>
          <div id="d30">
            Portfolio<div id="d30arrow">→</div>
          </div>
          <div id="d30">
            Restaurant<div id="d30arrow">→</div>
          </div>
          <div id="d30">
            Services<div id="d30arrow">→</div>
          </div>
          <div id="d30">
            Personal<div id="d30arrow">→</div>
          </div>
          <div id="d30">
            Courses<div id="d30arrow">→</div>
          </div>
          <div id="d30">
            Memberships<div id="d30arrow">→</div>
          </div>
          <div id="d31">Explore all→</div>
        </div>
        <div id="d28">
          <div id="d32">
            Start with a flexible designer template or build your own, then
            customize to fit your style and professional needs using our
            drag-and-drop website builder. Use Squarespace AI to generate a
            personalized website template that works for you.
          </div>
          <div id="d33"></div>
        </div>
      </div>

      <div id="d34">
        <div id="d35">
          <div id="d36">
            Create an online store website designed to sell anything
          </div>
          <div id="d37">
            <div id="d38">
              Everything you need to run an ecommerce business, from payments
              and checkout to shipping and fulfillment.
            </div>
            <div id="d39">EXPLORE SELLINGS →</div>
          </div>
        </div>

        <div id="d40"></div>
      </div>
      <div id="d41">
        <div id="d42">Tools to help you sell your time and expertise</div>
        <div id="d43">
          <div id="d44"></div>
          <div id="d45">
            <div id="d46">Schedule classes and appointments</div>
            <div id="d47">
              Take the hassle out of online scheduling with tools to keep your
              clients happy and your calendar booked. Promote your availability,
              accept payments, and more.
            </div>
            <div id="d48">EXPLORE SCHEDULING →</div>
          </div>
        </div>

        <div id="d49">
          <div id="d50">
            <div id="d46">Create an online course</div>
            <div id="d47">
              Turn your expertise into a passive income stream. Offer exclusive
              access to member-only content, create an online course, and
              paywall your content.
            </div>
            <div id="d4802">EXPLORE CONTEND & MEMBERSHIPS →</div>
          </div>
          <div id="d51"></div>
        </div>

        <div id="d43">
          <div id="d52"></div>
          <div id="d45">
            <div id="d46">Get paid with invoices</div>
            <div id="d47">
              The simplest way to collect payments so you can focus on
              delivering projects and growing your business.
            </div>
            <div id="d48">EXPLORE INVOICING →</div>
          </div>
        </div>
      </div>

      <div id="d55">
        <div id="d56">Promote your business with built-in marketing tools</div>
        <div id="d57">
          <div id="d58">
            <div id="d59"> Grow your audience</div>
            <div id="d60">
              Built-in SEO tools and social media integrations to maximize your
              reach and connect with your community.
            </div>
            <div id="d59" className="d59">
              Engage with customers
            </div>
            <div id="d60">
              Email campaigns that pull in your site’s colors, products, and
              blog posts so your communications feel effortlessly on-brand.
            </div>
            <div id="d59" className="d59">
              Optimize with analytics
            </div>
            <div id="d60">
              Insights into who is visiting your site, how your online store is
              performing, and more.
            </div>
            <div id="d48">EXPLORE MARETING TOOLS</div>
          </div>
          <div id="d59"></div>
          <div id="d61"></div>
        </div>
      </div>

      <div id="d62">
        <div id="d63"></div>
        <div id="d64">
          <div id="d65">Made with Squarespace</div>
          <div id="d66">
            Get inspired by a collection of websites made by Squarespace users
            just like you.
          </div>
          <div id="d67">VISIT SHOWCASE →</div>
        </div>
      </div>

      {/* <div id="last"></div> */}
      <div id="div070">
        <div id="div069">
          This website is inspired by{" "}
          <a id="div071" href="https://www.squarespace.com/">
            Squarespace.com
          </a>
        </div>
        <div>Developed by : Ayush Dewangan</div>
        <div>Email : ayush.dewangan2109@gmail.com</div>
        <div>
          Linkedin :{" "}
          <a id="div071" href="https://www.linkedin.com/in/ayushdewangan21/">
            Ayush Dewangan
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
