---
sidebar_position: 1
---

# System Requirements

The following system requirements apply to the **Blazar (V2) upgrade** and are critical for maintaining optimal node performance and protocol compliance.

## General System Requirements

The EigenDA network design dictates that operators with greater stake will
be asked to store a larger number of blob chunks/shards. As a result, an operator's node requirements are a
function of the stake amounts across participating quorums, which we
call 'Total Work Share' (TWS). 

### How TWS Works

An operator’s **TWS** is calculated as follows:

- For the ETH and EIGEN quorums, TWS is the **maximum** of the two stake weights.
- For any additional quorums, their stake **adds** to the base TWS.

**Example**:
- 5% stake in ETH + 10% in EIGEN → TWS = 10%
- Add 5% in a third quorum → TWS = 15%

### Hardware Recommendations

Use the table below to determine the recommended hardware based on your TWS:

| Class | Total Work Share (TWS)      | vCPUs (10th gen+) | Memory | Disk IOPS | Networking Capacity |
| ----- | --------------------------- | ----------------- | ------ | --------- | ------------------- |
| Small | Up to 2%                    | 4                 | 16 GB  | 3,000     | 1 Gbps              |
| Large | Greater than 2%             | 16                | 64 GB  | 12,000    | 10 Gbps             |

---

## Node Storage Requirements

EigenDA nodes **must** provision high-performance SSD storage in order to keep
up with network storage and retrieval tasks. Enterprise grade SSDs are recommended, such as `PCIe 4.0 x4 M.2` or `U.2 NVMe`.

:::warning
Failure to maintain adequate
performance will result in unacceptable validation latency and [automatic ejection](protocol-SLA/).
:::

---

### Throughput and Storage Scaling

EigenDA operator nodes are designed to scale up to 100 MB/s throughput. 

**storage is the only resource that must scale** with 
increased throughput. The rest of the system can remain fixed, as per the general requirements.

To operate at full capacity (100 MB/s) with an TWS of 5%, 
a node would require approximately 50 TB of storage. 
However, provisioning full capacity is typically cost-prohibitive and results in inefficient resource usage.

---

### Recommended (Elastic) Provisioning Strategy

The **preferred approach** is to provision storage elastically, allowing it to scale with demand. Under this model:
- Start with **8 TB** of enterprise-grade SSD storage.
- Ensure utilization stays below 50% over **any rolling 14-day period**.

---

### When Elastic Provisioning Is Not Feasible

If elastic provisioning is not possible, storage must be provisioned for full capacity using the following formula:
```
Required Storage (TB) = TWS (%) * 1000
```
Example: For an TWS of 5%, provision 50 TB to support the full throughput capacity. 


:::info
The formula above is derived and simplified from the following formula:

```
<Gross System Throughput(MB/s)> * <14 days in seconds> * <% stake>
```
:::

## System Upgrades

Since system requirements scale dynamically in accordance with the amount of stake delegated to the operator, node operators may from time to time need to upgrade their system setups in order to continue meeting the [Protocol SLA](protocol-SLA/). Guidance for performing such upgrades is covered in [System Upgrades](../upgrades/system-upgrades/)

## IP Stability Requirements

Currently, the EigenDA protocol requires DA nodes to publish their IP address to the Ethereum L1 so providers and consumers of data can reach the node at this address. Consequently, node operators must be able to meet certain IP address stability and reachability requirements, as summarized in the table below.

|                        | Shared IP                                                                                                                           | Dedicated IP                                                                                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stable IP              | ❌ Note: this will still work, if operators themselves figure out how to make the IP:Port reachable, e.g. configure port forwarding. | ✅ This is the ideal case for an EigenDA operator.                                                                                                                |
| Unstable (Changing) IP | ❌ Note: this will still work, if operators themselves figure out how to make the IP:Port reachable, e.g. configure port forwarding. | ✅ Although this will work, operators are encouraged to have a stable IP, because changing IP will incur an Eth transaction (to update IP on-chain) and cost gas. |
