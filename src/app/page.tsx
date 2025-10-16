"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/5501192/pexels-photo-5501192.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Dark, artistic floral arrangement with eryngium, carnations, and berries. Perfect for winter decor." },
  { "id": "product-1", "url": "https://images.pexels.com/photos/7181899/pexels-photo-7181899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A child lies on sand under a starry sky, pointing while a red rose stands nearby." },
  { "id": "product-2", "url": "https://images.pexels.com/photos/34301927/pexels-photo-34301927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of an AMD Radeon Graphics Card with RGB Lights" },
  { "id": "product-3", "url": "https://images.pexels.com/photos/34301927/pexels-photo-34301927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of an AMD Radeon Graphics Card with RGB Lights" },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A woman working at a desk using a laptop and smartphone, exemplifying remote work." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Dark Blue Blooms"
          logoSrc="/assets/logo.svg"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Dark Blue Blooms"
            description="Experience the elegance of unique dark blue flowers."
            imageSrc={assetMap.find(a => a.id === 'hero-image').url}
            buttons={[{ text: "Shop Now", href: "#product" }, { text: "Contact Us", href: "#contact" }]}
            imagePosition="left"
            className="bg-blue-100"
            titleClassName="text-blue-900"
            descriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Quality", description: "Our flowers are carefully selected for their deep blue hues.", icon: "Award" },
              { title: "Sustainability", description: "Grown with care and commitment to the environment.", icon: "Leaf" }
            ]}
            imageSrc={assetMap.find(a => a.id === 'hero-image').url}
            className="bg-blue-100"
            bulletTitleClassName="text-blue-900"
            bulletDescriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardThree
            products={[
              { id: "1", name: "Dark Blue Rose", price: "$15", imageSrc: assetMap.find(a => a.id === 'product-1').url, initialQuantity: 1 },
              { id: "2", name: "Dark Blue Tulip", price: "$12", imageSrc: assetMap.find(a => a.id === 'product-2').url, initialQuantity: 1 },
              { id: "3", name: "Dark Blue Orchid", price: "$20", imageSrc: assetMap.find(a => a.id === 'product-3').url, initialQuantity: 1 },
            ]}
            className="bg-blue-100"
            cardNameClassName="text-blue-900"
            cardPriceClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24 bg-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <FaqSplitText
            faqs={[
              { id: "1", title: "How can I order?", content: "Simply browse our collection and add flowers to your cart." },
              { id: "2", title: "Do you offer delivery?", content: "Yes, we offer delivery options for your convenience." }
            ]}
            sideTitle="Frequently Asked Questions"
            sideDescription="All you need to know about our services."
            className="bg-blue-100"
            sideTitleClassName="text-blue-900"
            sideDescriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Updated"
            description="Join our newsletter for the latest floral trends."
            imageSrc={assetMap.find(a => a.id === 'contact-image').url}
            mediaPosition="right"
            className="bg-blue-100"
            titleClassName="text-blue-900"
            descriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-100">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Contact", href: "#contact" }] },
              { title: "Shop", items: [{ label: "All Products", href: "#product" }] },
              { title: "Help", items: [{ label: "FAQ", href: "#faq" }] }
            ]}
            className="bg-blue-100"
            columnsClassName="text-blue-900"
            columnTitleClassName="text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
