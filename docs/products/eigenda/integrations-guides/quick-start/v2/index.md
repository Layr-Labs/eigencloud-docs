---
sidebar_position: 1
title: V2 Guide
---

# EigenDA Payment and Data Dispersal Guide
This guide walks through the process of setting up payments and dispersing data using EigenDA on Sepolia.

:::tip
This guide uses the go client to set up payments and disperse data. For information on alternative methods to integrate with
the EigenDA APIs, refer to the [Overview](../../overview.md). 
:::

## On Demand Data Dispersal
### On-chain setup
:::info Pre-Requisites
- ETH on the Ethereum Sepolia testnet
- [Foundry](https://book.getfoundry.sh/getting-started/installation) installed
- RPC URL for Sepolia
- Private key for transactions
:::

To disperse to the network you will need a balance to pull from. If you would like to learn more about EigenDA's Payment Module, check the reference [here](../../../core-concepts/payments.md).

To start make sure you have ETH on the Ethereum Sepolia testnet, we'll deposit into the Payment Vault and then any other EigenDA requests charges will be pulled from here. 

To start we will deposit into the payment vault using Foundry's `cast`. 
:::note Installation
If you have not installed Foundry, follow their install commands [here](https://book.getfoundry.sh/getting-started/installation). 
:::

This will deposit 1 ETH into the Payment Vault on Sepolia:
:::note Deposits
Calculate the amount of data needed to send, funds deposited into the payment vault are non-refundable.
:::

```bash
cast send --rpc-url <YOUR_RPC_URL> \
 --private-key <YOUR_PRIVATE_KEY> \
 0x2E1BDB221E7D6bD9B7b2365208d41A5FD70b24Ed \
 "depositOnDemand(address)" \
<YOUR_ADDRESS> \
 --value 1ether
```
Now that we have the account setup for on-demand payments, let's send data to EigenDA.

## Dispersing Data
### Setup
To disperse a data, we'll start by setting up our `Disperser Client` to interact with the EigenDA disperser.

1. Create a project directory
```bash
mkdir v2disperse
cd v2disperse
```

2. Create the main file:
```bash
go mod init
```
### Implementation
#### 1. Import Dependencies
```Golang
package main

import (
	"context"
	"fmt"
	"time"

    "github.com/joho/godotenv"

    

	"github.com/Layr-Labs/eigenda/api/clients/v2"
	authv2 "github.com/Layr-Labs/eigenda/core/auth/v2"
	corev2 "github.com/Layr-Labs/eigenda/core/v2"
	"github.com/Layr-Labs/eigenda/encoding/utils/codec"
)
``` 

#### 2. Create Disperser Client
:::note
Your `signer` should be the same address you deposited from
:::
```Golang
err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
	}
	privateKey := os.Getenv("EIGENDA_AUTH_PK")

signer, err := authv2.NewLocalBlobRequestSigner(privateKey)
disp, err := clients.NewDisperserClient(&clients.DisperserClientConfig{
	Hostname:          "disperser-testnet-sepolia.eigenda.xyz",
	Port:              "443",
	UseSecureGrpcFlag: true,
}, signer, nil, nil)
if err != nil {
	println("Error creating disperser client")
	panic(err)
}
```


#### 3. Setup Context and Data
```Golang
ctx, cancel := context.WithTimeout(context.Background(), time.Second*30)
defer cancel()
```

#### 4. Prepare Data to Send
```Golang
bytesToSend := []byte("Hello World")
bytesToSend = codec.ConvertByPaddingEmptyByte(bytesToSend)
quorums := []uint8{0, 1}
```
#### 5. Sending Data
Call `DisperseBlob()` to send your data to EigenDA
```Golang
status, request_id, err := disp.DisperseBlob(ctx, bytesToSend, 0, quorums, 0)
if err != nil {
	panic(err)
}
```

#### 6. Check a Blob status
Call `GetBlobStatus()` to interact with the data
```Golang
blobStatus, err = disp.GetBlobStatus(ctx, request_id)
```

Now you're set up for dispersing data with EigenDA, for further examples of interacting with the EigenDA client check our repo [here](https://github.com/Layr-Labs/eigenda/tree/master/api/clients/v2/examples) or the EigenDA Proxy guides [here](../../eigenda-proxy/eigenda-proxy.md)

