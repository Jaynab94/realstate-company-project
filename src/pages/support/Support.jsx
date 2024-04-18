import { Helmet } from "react-helmet-async";

const Support = () => {
    return (
        <div>
            <Helmet>
                <title>Luxe | Support</title>
            </Helmet>
            <div>
                <p className="font-serif">
                    Remember, every click on your website represents someone's curiosity or interest. <br /> Keep refining your content and design to make each visitor's experience memorable and valuable. <br /> You're crafting more than just a website; you're creating a digital <br /> destination where people can find inspiration, information, and enjoyment.

                    For assistance or inquiries, feel free to reach out to us:
                </p>

                <h1 className="font-bold text-xl">Mobile: +1 (555) 123-4567</h1>
                <h1 >Email: support@luxuryluxe.com</h1>
                <h2 className="font-serif text-2xl">  Keep up the great work, and never underestimate the impact you're making in the online world!"
                </h2>
            </div>
        </div>
    );
};

export default Support;