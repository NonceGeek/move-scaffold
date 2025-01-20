"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState } from "react";
import { WalletDialog } from "./WalletDialog";
import { ConnectedWalletButton } from "./ConnectedWalletButton";
import { Button } from "../ui/button";

export function WalletButton() {
  const [showDialog, setShowDialog] = useState(false);
  const { connected } = useWallet();

  return (
    <WalletDialog
      open={showDialog}
      onOpenChange={setShowDialog}
      onConnectSuccess={(name) => {
        console.log(`Connected to ${name}`);
      }}
      onConnectError={(error) => {
        console.error("Connection error:", error);
      }}
    >
      {connected ? (
        <ConnectedWalletButton />
      ) : (
        <Button 
          variant="outline" 
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700/90 hover:to-blue-600/90 text-white hover:text-white/90 border-0 font-medium px-6 py-2 h-10 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
        >
          Connect Wallet
        </Button>
      )}
    </WalletDialog>
  );
} 