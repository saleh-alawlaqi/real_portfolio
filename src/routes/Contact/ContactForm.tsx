import { Button, Input, Textarea } from "@nextui-org/react";

const ContactForm = () => {
    return (
        <form className="flex flex-col space-y-5 flex-1 bg-white p-10 rounded-md">
            <Input type="text" label="Name" className="flex-1" />
            <Input
                type="email"
                label="Email"
                description="We'll never share your email with anyone else."
                className="flex-1"
            />
            <Textarea label="Message" className="flex-1" />
            <Button type="submit" color="primary">
                Send Message
            </Button>
        </form>
    );
};

export default ContactForm;
