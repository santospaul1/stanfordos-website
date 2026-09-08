import Link from "next/link";
export function Footer() { return <footer className="footer"><div className="container footer-grid">
  <div><Link href="/" className="brand footer-brand"><span className="brand-mark">S</span><span>STANFORDOS</span></Link><p>Building practical software that helps organizations operate smarter, faster and with confidence.</p></div>
  <div><h4>Products</h4><Link href="/products/school-management">School Management</Link></div>
  <div><h4>Company</h4><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/book-demo">Book a Demo</Link></div>
  <div><h4>Connect</h4><a href="mailto:hello@stanfordos.com">hello@stanfordos.com</a><a href="tel:+254000000000">+254 000 000 000</a></div>
</div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Stanfordos. All rights reserved.</span><span>Built for modern organizations.</span></div></footer> }
