import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import exp from "constants";
import { ArrowLeft, Send } from 'lucide-react';

interface ChatViewProps {
  chat: {
    id: number;
    name: string;
    message: string;
    time: string;
  };
  onBack: () => void;
}

const ChatView = ({ chat, onBack }: ChatViewProps)=> {
  return (
    <div className="flex flex-col h-full bg-dark">
      <div className="flex items-center gap-3 p-4 border-b border-gray-800">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Avatar>
          <AvatarImage src={`https://i.pravatar.cc/100?u=${chat.id}`} />
          <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-medium text-white">{chat.name}</h2>
      </div>
      <div className="flex-1 p-4">
        {/* Chat messages would go here */}
        <p className="text-gray-400">Здесь будут сообщения чата...</p>
      </div>
      <div className="p-4 border-t border-gray-800">
        <div className="flex gap-2">
          <Input
            className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            placeholder="Введите сообщение..."
          />
          <Button size="icon" type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatView;