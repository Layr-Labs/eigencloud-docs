---
sidebar_position: 5
---

# Troubleshooting


#### Where do I check if my operator is a part of EigenDA set?

You can search using the below EigenLayer webapp links:

* [Mainnet](https://app.eigenlayer.xyz/avs/0x870679e138bcdf293b7ff14dd44b70fc97e12fc0)
* [Holesky](https://holesky.eigenlayer.xyz/avs/eigenda)

#### I opted in into running EigenDA but I am not in the operator set anymore. What happened?

Either you are [churned out](../operator-guides/registration-protocol.md#the-eigenda-churn-approver) by another operator or you have been [ejected due to non-signing](./requirements/protocol-SLA/).
If neither of these reasons apply, please reach out to EigenLayer Support

#### How do I know if my node is signing EigenDA blobs correctly?

There are few ways you can confirm that your node is signing the blobs

* Ensure that you have monitoring setup according to the
 [guide](./metrics-and-monitoring/). Once you have added the provided
 EigenDA Grafana dashboards, take a look at the graph saying **EigenDA number
 of processed batches**. This graph should be increasing like below graph:

 ![EigenDA correct sign](/img/operator-guides/avs-installation-and-registration/eigenda-operator-guide/eigenda-correct-sign.png)

* If you have not setup metrics yet, you can still check the logs of your
  EigenDA Node. If you are signing correctly, your logs should resemble those shown [here](./run-a-node/registration#check-for-network-traffic)


### Errors while opting in into EigenDA

##### failed to request churn approval

```
Error: failed to opt-in EigenDA Node Network for operator ID: <OPERATOR_ID>, operator address: <OPERATOR_ADDRESS>, error: failed to request churn approval: rpc error: code = Unknown desc = failed to process churn request: registering operator must have 10.000000% more than the stake of the lowest-stake operator. Stake of registering operator: 0, stake of lowest-stake operator: 6301801525718228411481, quorum ID: 0
```

This is because your operator doesn't have enough stake to run EigenDA. Please refer to [EigenDA Churn Management](../operator-guides/registration-protocol.md#the-eigenda-churn-approver) to learn more about this error.

##### failed to reregister
```error: execution reverted: RegistryCoordinator._registerOperator: operator cannot reregister yet
{"time":"<TIME>","level":"ERROR","source":{"function":"github.com/Layr-Labs/eigenda/core/eth.(*Transactor). 
RegisterOperator","file":"/app/core/eth/tx.go","line":207},"msg":"Failed to register operator","component":"Transactor","err":"execution reverted: RegistryCoordinator._registerOperator: operator cannot reregister yet"}
```

The cooldown for reregistering following ejection is 3 days on mainnet and 1 day on testnet. Try reregistering following the cooldown period. 

##### failed to read or decrypt the BLS/ECDSA private key

Please make sure that the `NODE_ECDSA_KEY_FILE_HOST` and `NODE_BLS_KEY_FILE_HOST` variables in the `.env`
file are correctly populated.

#### My EigenDA node's logs look like these. What does it mean?

```
INFO [01-10|20:49:53.436|github.com/Layr-Labs/eigenda/node/node.go:233]             Complete an expiration cycle to remove expired batches "num expired batches found and removed"=0 caller=node.go:233
INFO [01-10|20:52:53.436|github.com/Layr-Labs/eigenda/node/node.go:233]             Complete an expiration cycle to remove expired batches "num expired batches found and removed"=0 caller=node.go:233
INFO [01-10|20:55:53.436|github.com/Layr-Labs/eigenda/node/node.go:233]             Complete an expiration cycle to remove expired batches "num expired batches found and removed"=0 caller=node.go:233
INFO [01-10|20:58:53.436|github.com/Layr-Labs/eigenda/node/node.go:233]             Complete an expiration cycle to remove expired batches "num expired batches found and removed"=0 caller=node.go:233
INFO [01-10|21:01:53.436|github.com/Layr-Labs/eigenda/node/node.go:233]             Complete an expiration cycle to remove expired batches "num expired batches found and removed"=0 caller=node.go:233
INFO [01-10|21:04:53.437|github.com/Layr-Labs/eigenda/node/node.go:233]             Complete an expiration cycle to remove expired batches "num expired batches found and removed"=0 caller=node.go:233
INFO [01-10|21:07:53.436|github.com/Layr-Labs/eigenda/node/node.go:233]             Complete an expiration cycle to remove expired batches "num expired batches found and removed"=0 caller=node.go:233
INFO [01-10|21:10:53.436|github.com/Layr-Labs/eigenda/node/node.go:233]             Complete an expiration cycle to remove expired batches "num expired batches found and removed"=0 caller=node.go:233
INFO [01-10|21:13:53.436|github.com/Layr-Labs/eigenda/node/node.go:233]             Complete an expiration cycle to remove expired batches "num expired batches found and removed"=0 caller=node.go:233
INFO [01-10|21:16:53.436|github.com/Layr-Labs/eigenda/node/node.go:233]             Complete an expiration cycle to remove expired batches "num expired batches found and removed"=0 caller=node.go:233
```

These logs only contain intermittent INFO logs and they do not contain instances of logs that indicate your node is actively receiving new blobs from the Dispser. Healthy log files would include messages such as "Validate batch took", "Store batch took", "Signed batch header hash".

This means you node software is running but you are not opted-in into EigenDA.
If you opted in into EigenDA successfully and still not receiving dispersal
traffic, make sure your network settings allow EigenDA's disperser to reach your
node. Please check that your network settings match the [prescribed settings](./run-a-node/run-with-docker#network-configuration).

If you were previously opted-in and were signing, it's possible you were [churned
out](../operator-guides/registration-protocol.md#the-eigenda-churn-approver) by another operator or you have been
[ejected due to non-signing or other SLA violations](./requirements/protocol-SLA/). Please try opting-in
again.


#### What does the error "EIP1271 .. signature not from signer" mean?

This indicates you have not imported your BLS key correctly. Please reconfirm the keys you imported to ensure there were no typos or mistakes.

#### Error message "failed to update operator's socket .. execution reverted"

"msg="failed to update operator's socket" !BADKEY="execution reverted: RegistryCoordinator.updateSocket: operator is not registered"

This indicates the RPC endpoint may not be functioning correctly, or the operator config is misconfigured (eg pointing to the wrong chain_id value), or the operator is not registered.

Please test your RPC endpoint via the following command `curl -I [rpc_url]`. 
- A 400 series response indicates the server is down (unreachable).
- A 200 series response indicates the server is available and working properly.