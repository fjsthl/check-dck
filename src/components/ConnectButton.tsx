import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatUnits } from '@ethersproject/units'

export default function ConnectButton() {
  const {activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const DCK_ADDRESS = '0x2bD1128d5a61C9611F73a00378026282DBa77C01'

  const dckBalance = useTokenBalance(DCK_ADDRESS, account)

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return account ? (
    <Box>
      <Text color="white" fontSize="md">
        {dckBalance && <p>DCK balance: {formatUnits(dckBalance, 18)}</p>}
      </Text>
    </Box>
  ) : (
    <Button onClick={handleConnectWallet}>
      Connect to a wallet
    </Button>
  );
}