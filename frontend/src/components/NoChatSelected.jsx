import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <section className="flex-1 flex items-center justify-center bg-base-100">
      <div className="max-w-sm text-center px-6">
        <div className="mx-auto mb-4 size-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <MessageSquare className="size-6 text-primary" />
        </div>
        <h2 className="text-xl font-semibold mb-2">No chat selected</h2>
        <p className="text-base-content/70">Choose a contact from the sidebar to start chatting.</p>
      </div>
    </section>
  );
};

export default NoChatSelected;
