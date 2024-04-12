import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
const DeleteProject = (props: any) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button color="danger" onClick={onOpen}>
                Delete project
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Delete project
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    Are you sure you want to delete the project? This action cannot
                                    be undone.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button
                                    color="danger"
                                    onPress={() => {
                                        onClose();
                                        props.onConfirm();
                                    }}
                                >
                                    Confirm deletion
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default DeleteProject;
