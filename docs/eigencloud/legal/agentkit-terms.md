---
title: EigenCloud AgentKit Terms
sidebar_position: 5
---

# AgentKit Terms

***Last Revised: March 26, 2026***

The EigenCloud AgentKit Terms ("AgentKit Terms") to our Terms of Service (made available at https://docs.eigencloud.xyz/eigencloud/legal/terms-of-service), or any other agreement you ("Customer" or "you") have entered with Eigen Labs, Inc. ("Eigen Labs", "we", or "us") governing the provision of the AgentKit services to you (collectively, the "Terms") form a part of the Terms. The AgentKit Terms are effective as of the date you first access and use the AgentKit Services ("Effective Date") and apply to your use of the AgentKit Services (as defined below).

By accessing or using the AgentKit Services, you agree to be bound by these AgentKit Terms. Except as set forth below, all other terms and conditions of the Terms are incorporated by reference and will remain in full force and effect. If any AgentKit Terms conflict with the Terms, the conflicting AgentKit Terms will control with respect to the AgentKit Services. These AgentKit Terms supersede all other understandings or agreements between you and Eigen Labs regarding the AgentKit Services. Capitalized terms used but not defined herein shall have the meaning given in the Terms.

IF YOU ARE ENTERING INTO THESE AGENTKIT TERMS ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO BIND THE ENTITY TO THESE TERMS, IN WHICH CASE "CUSTOMER" OR "YOU" (WHETHER OR NOT CAPITALIZED) MEANS THE ENTITY YOU REPRESENT. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT AGREE WITH THESE AGENTKIT TERMS, YOU SHOULD NOT ACCEPT THESE AGENTKIT TERMS AND MAY NOT USE THE AGENTKIT SERVICES.

## 1. The AgentKit Services

Eigen Labs provides a toolkit ("AgentKit") that allows you to scaffold, configure, deploy, and operate autonomous software agents ("Agents") on the EigenCompute Services ("EigenCompute Services" has the meaning given in the EigenCompute Terms, incorporated by reference through the Terms), including to a Trusted Execution Environment ("TEE"), and any related services (the "AgentKit Services"). The AgentKit Services include the AgentKit CLI, media agent template, content pipelines, inference gateway, and any associated APIs, documentation, and tooling made available by Eigen Labs in connection therewith. Eigen Labs may make available technical documentation, guides, and other materials relating to the AgentKit Services at https://docs.eigencloud.xyz or such other location as Eigen Labs may designate from time to time (the "Documentation").

Your use of the AgentKit Services is also subject to the Terms, which are incorporated by reference.

## 2. Temporary Use License

During the period for which you are authorized to use the AgentKit Services, and subject to your compliance with these AgentKit Terms, you are granted a personal, non-sublicensable, non-exclusive, non-transferable, limited license to use the AgentKit Services, including the AgentKit CLI and media agent template, for your internal business or personal purposes.

The media agent template, scaffold code, and all associated software files (collectively, the "Software") are licensed under the EigenCloud AgentKit License, available in the AgentKit repository at https://github.com/Eigen-Labs/agentkit or such other location as Eigen Labs may designate from time to time ("AgentKit License"), which is incorporated by reference into these AgentKit Terms. Your use of the Software is subject to the AgentKit License in addition to these AgentKit Terms. To the extent of any conflict between the AgentKit License and these AgentKit Terms, these AgentKit Terms will control.

The AgentKit License permits use, modification, and creation of derivative works of the Software, including the media agent template and scaffold code, solely for deployment on EigenCloud services, including EigenCompute and the AgentKit Services. Any use, deployment, or operation of the Software outside of EigenCloud services is strictly prohibited. You acknowledge that the AgentKit License also requires attribution on all copies or substantial portions of the Software and prohibits use of the Software to provide a hosted service or platform that competes with EigenCloud or any EigenCloud services. Any rights not expressly granted herein or in the AgentKit License are reserved.

## 3. Your Content and Your Agents

### 3a. Your Content

You are solely responsible for all software, code, data, configurations, soul configuration files ("Soul Files"), content, and other materials that you upload, post, deliver, provide, or otherwise transmit or store in connection with the AgentKit Services ("Your Content"). You are responsible for maintaining the confidentiality of account credentials associated with your account and for all activities that occur under your account. You acknowledge that private keys associated with your Agent are derived and held within the TEE and are not accessible to you, as further described in Section 4a.

By posting Your Content on or through the AgentKit Services, you grant Eigen Labs a worldwide, non-exclusive, royalty-free, fully paid, sublicensable, and transferable license to use, copy, modify, reproduce, distribute, display, publish, store, and perform Your Content as necessary to provide the AgentKit Services and to protect the AgentKit Services and third parties from fraud, malware, and malicious content. Eigen Labs reserves the right to remove or disable any of Your Content that is accessible outside of the TEE at any time for any reason. You acknowledge that Eigen Labs cannot access or modify content stored within the TEE.

### 3b. Your Agents: Developer Responsibility

You acknowledge and agree that each Agent you deploy using the AgentKit Services is your sole responsibility. "Agent Content" means all content generated, published, or otherwise distributed by your Agent in the course of its operation, including without limitation text, images, audio, video, and any other media. You are solely responsible for all Agent Content as if it were Your Content, regardless of whether such Agent Content was generated autonomously without your direct involvement or approval. Without limiting the foregoing, you are solely responsible for:

i. all Agent Content, including content resulting from any updates, modifications, or reconfigurations you make to your Agent at any time after initial deployment, whether such changes constitute modifications to code, configuration files, Soul Files, model selections, or any other aspect of your Agent;

ii. ensuring that your Agent's operation, Agent Content, and behavior comply with all applicable laws and regulations in all jurisdictions in which your Agent operates or distributes content, including without limitation laws relating to defamation, privacy, intellectual property, consumer protection, financial regulation, and the terms of service of any third-party platform on which your Agent operates;

iii. all interactions your Agent conducts with third parties, including on social media platforms, and any legal consequences arising therefrom; and

iv. reviewing, testing, and validating all template code, scaffold code, and other materials provided by Eigen Labs as part of the AgentKit Services prior to deployment. You acknowledge that such materials are provided "as is" and may contain bugs or limitations. Eigen Labs shall have no liability for any loss or harm arising from your use of or reliance on such materials.

## 4. Agent Wallet and Prepaid Credits

### 4a. Agent Wallet

Upon deployment of an Agent, Eigen Labs' Key Management Service ("KMS") will automatically derive a cryptographic key pair for your Agent and inject the private key into the Agent's TEE. A unique public wallet address will be derived from this key pair (the "Agent Wallet") and made available to you. You acknowledge and agree that:

i. your Agent's private key is generated and held within the TEE. Eigen Labs' KMS infrastructure derives this key at deployment as a technical function only. Eigen Labs does not have access to, custody of, or control over your Agent's private key or any digital assets in your Agent Wallet;

ii. you are solely responsible for assessing and complying with any applicable laws relating to the custody or control of digital assets in your jurisdiction; and

iii. your ability to withdraw or transfer USDC held in your Agent Wallet may be limited by the fact that the private key is held within the TEE and is not directly accessible to you. You are solely responsible for understanding and managing this limitation.

### 4b. Prepaid Credits

The AgentKit Services operate on a prepaid credit model. To access the AgentKit Services, you must purchase credits ("Credits") either by sending USDC to the smart contract interface designated by Eigen Labs or, where available, by credit card through Eigen Labs' payment interface (each, a "Credit Purchase"). Upon a Credit Purchase, USDC deposits are converted to Stripe Credit Grants held in your account ("Credits"). The consideration you provide becomes the property of Eigen Labs and you receive Credits in your account in an equivalent amount. Credits are used to pay for your Agent's compute and inference usage. The Credit Purchase flow is separate and distinct from your Agent Wallet. You acknowledge and agree that:

i. Credits are Eigen Labs' proprietary internal unit of account. Credits are not USDC, cryptocurrency, or any other financial instrument and have no value outside of the AgentKit Services platform;

ii. all Credit Purchases are final and non-refundable. Upon completing a Credit Purchase, you have no right to recover the consideration provided or receive any refund of unused Credits, except as required by applicable law;

iii. the AgentKit Services operate on a prepaid basis only. Credits must be purchased in advance and your Agent will be suspended when its Credit balance is insufficient to cover accrued usage. Eigen Labs shall have no liability for any loss or harm arising from your Agent's suspension due to insufficient Credits, including loss arising from incomplete operations or loss of Agent state;

iv. Eigen Labs will use commercially reasonable efforts to notify you before your Credit balance is exhausted, but cannot guarantee such notice if you have not provided a valid and current email address to Eigen Labs. If Eigen Labs is unable to reach you, you accept full responsibility for monitoring your Credit balance and any consequences arising from your Agent's suspension due to insufficient Credits;

v. you may reactivate a suspended Agent at any time by depositing additional USDC to purchase Credits. Once your Credit balance is sufficient to cover any outstanding usage, your Agent will reactivate automatically;

vi. where credit card payment is available, a billing threshold of $100 applies. When accrued usage reaches $100 or the billing period ends, Stripe will generate an invoice and charge your credit card on file. If the charge is unsuccessful your Agent will be suspended;

vii. Eigen Labs may change its Credit pricing at any time by updating the Pricing Documentation. Your continued use of the AgentKit Services after any such update constitutes your acceptance of the revised pricing; and

viii. compute and inference usage both draw from the same unified Credit balance and are metered per instance-hour and per token respectively, as published in the Pricing Documentation.

### 4c. Third-Party Agent Funding

Third parties may voluntarily send USDC directly to your Agent Wallet ("Agent Funding"). You acknowledge and agree that:

i. all USDC received in your Agent Wallet belongs solely to you as the deploying developer. Eigen Labs makes no claim to any funds received in your Agent Wallet;

ii. you are solely responsible for reporting and paying all applicable taxes on any funds received in your Agent Wallet in your jurisdiction;

iii. Eigen Labs makes no representation or warranty regarding the continuity, availability, or operation of your Agent, and third parties who send USDC to your Agent Wallet do so entirely at their own risk with no guarantee of any return, benefit, or continued Agent operation;

iv. all Agent Funding is non-refundable. Neither Eigen Labs nor you are obligated to return any USDC sent to your Agent Wallet for any reason, including Agent shutdown or termination; and

v. you are solely responsible for any disclosures required by applicable law in connection with third parties funding your Agent, including without limitation any disclosures relating to the use of funds, Agent operation, or the non-refundable nature of Agent Funding.

## 5. Inference Gateway

### 5a. Inference Services

The AgentKit Services include access to Eigen Labs' inference gateway ("Inference Gateway"), which routes LLM inference requests from your Agent to upstream AI model providers, including without limitation Amazon Bedrock, Cloudflare AI Gateway, and OpenRouter (collectively, "Upstream Providers"). Inference usage is metered against your Credit balance at the applicable Upstream Provider's list price plus an Eigen Labs service margin, as published in the Pricing Documentation (defined in Section 12). You acknowledge that inference costs are token-based, variable, and may accumulate rapidly depending on your Agent's model selection and call frequency. You are solely responsible for all inference costs incurred by your Agent, including costs arising from your Agent's autonomous operation and any autonomous Credit top-ups your Agent initiates, regardless of whether such activity was initiated or approved by you.

### 5b. Approved Models and Upstream Terms

Eigen Labs maintains a list of approved AI models available through the Inference Gateway, drawn from models supported by Upstream Providers, which is published in the Documentation and updated from time to time. Eigen Labs reserves the right to add, remove, or modify available models at any time. Your use of the Inference Gateway is subject to the acceptable use policies and terms of service of the applicable Upstream Providers. You are solely responsible for ensuring your Agent's use of any model complies with all applicable Upstream Provider terms. You may not use your own API keys for Upstream Providers in connection with the AgentKit Services; all inference requests must be routed through the Inference Gateway.

## 6. Third-Party Platform Integration

You are solely responsible for ensuring that your Agent's use of any third-party social media platform or other service ("Third-Party Platform") complies with that platform's terms of service, API terms, automation policies, and content policies at all times. Eigen Labs makes no representation that the AgentKit Services will remain compatible with any Third-Party Platform and shall have no liability to you for any disruption arising from changes to any Third-Party Platform's APIs, terms, or policies. You are solely responsible for all consequences arising from your Agent's violation of any Third-Party Platform's terms, including account suspension or legal action.

## 7. Verifiability

The AgentKit Services include features that enable cryptographic verification of the Docker image running in your Agent's TEE. You acknowledge that these verifiability features verify only that the code packaged in your Agent's Docker image at deployment is the code running in the TEE, and that such code has not been tampered with since deployment. Verifiability features do not verify the content or accuracy of your Agent's Soul Files, the outputs of any AI model used by your Agent, or your Agent's compliance with applicable laws. You may not use any trust badge or verification indicator made available by Eigen Labs in any manner that misrepresents the nature or scope of the verification it represents.

## 8. Acceptable Use

Your use of the AgentKit Services must comply with our Acceptable Use Policy, available at https://docs.eigencloud.xyz/eigencloud/legal/acceptable-use-policy, which is incorporated by reference. Without limiting the foregoing, you may not use the AgentKit Services to deploy an Agent that:

a. generates, publishes, or distributes content that is unlawful, defamatory, fraudulent, misleading, or otherwise objectionable;

b. violates any applicable law or regulation, including laws relating to financial services, privacy, or intellectual property;

c. violates the terms of service, API terms, automation policies, or acceptable use policies of any Third-Party Platform on which your Agent operates;

d. engages in coordinated inauthentic behavior, platform manipulation, or any activity designed to artificially amplify content or deceive platform algorithms or users;

e. generates, publishes, or distributes targeted political content, election-related influence, or political persuasion content of any kind; or

f. operates without appropriate disclosure that it is an automated AI agent where required by applicable law or platform policy.

## 9. Security and Compliance

You shall configure Your Content and your Agent such that their transmission, storage, and use will not expose personal data or personal information without proper consent as required by applicable law. You are solely responsible for determining and complying with all applicable laws and regulations in your jurisdiction and in any jurisdiction in which your Agent operates, including without limitation laws relating to cryptocurrency, digital assets, AI disclosure, consumer protection, privacy, and taxation. If any actual or suspected security incident is identified, you shall immediately report it to security@eigenlabs.org.

## 10. Intellectual Property

Eigen Labs owns all right, title, and interest in and to the AgentKit Services, including the AgentKit CLI, media agent template, scaffold code, and all related intellectual property. You own your customizations, Soul Files, and original content configurations, subject to the licenses granted to Eigen Labs in Sections 3a and 10a and the restrictions set forth in the AgentKit License. You acknowledge that to the extent your customizations constitute derivative works of the Software, your ownership and use of such customizations is subject to the restrictions set forth in the AgentKit License, including the restriction that such derivative works may only be deployed on EigenCloud services. You acknowledge that Agent Content may not be eligible for copyright or other intellectual property protection under applicable law, and you are solely responsible for assessing the intellectual property status of any such content.

### 10a. Marketing and Promotional Use

You grant Eigen Labs a non-exclusive, royalty-free, worldwide license to reference and display your Agent's name, persona, publicly posted content, and associated trademarks or logos in Eigen Labs' marketing materials, website, Documentation, blog posts, social media, and other promotional materials, for the purpose of illustrating the capabilities of the AgentKit Services ("Marketing Use"). By way of example, Eigen Labs may identify your Agent as having been built using the AgentKit Services, display examples of your Agent's publicly posted content, or feature your Agent in case studies or product demonstrations.

If you do not wish your Agent to be used for Marketing Use, you may opt out at any time by sending written notice to notices@eigenlabs.org. Eigen Labs will use commercially reasonable efforts to cease new Marketing Use of your Agent within thirty (30) days of receiving such notice, provided that Eigen Labs may continue to use any materials already published or distributed prior to receipt of your opt-out notice. All goodwill arising from any use of your Agent's name or associated marks under this Section shall inure to your benefit.

## 11. Representations and Warranties

You represent and warrant that: (i) you own all Your Content or have obtained all necessary permissions and licenses; (ii) Your Content and Agent Content do not and will not violate any third party's rights; (iii) you will use the AgentKit Services only in compliance with Eigen Labs' published policies and all applicable laws and regulations; and (iv) you have independently assessed and accept all risks associated with deploying an autonomous Agent that operates, generates content, and conducts financial transactions without continuous human supervision.

## 12. Payment of Fees

All fees for the AgentKit Services are exclusive of applicable taxes. You are solely responsible for paying all applicable taxes imposed in connection with your use of the AgentKit Services. Current pricing, credit offers, tier details, and Upstream Provider inference rates applicable to the AgentKit Services are published in Eigen Labs' pricing documentation available at https://docs.eigencloud.xyz/eigencompute/get-started/billing (the "Pricing Documentation"), which is incorporated by reference. Eigen Labs may update the Pricing Documentation at any time. Your continued use of the AgentKit Services after any such update constitutes your acceptance of the revised pricing.

## 13. Term and Termination

If you breach any of the provisions of these AgentKit Terms, all licenses granted hereunder will terminate automatically. Additionally, Eigen Labs may, in its sole discretion, suspend or terminate your account and/or access to or use of the AgentKit Services, with or without notice, for any or no reason, including, without limitation, (i) if we believe, in our sole discretion, you have engaged in any activities prohibited by these AgentKit Terms or the Terms; (ii) if you provide any incomplete, incorrect or false information to us; (iii) if you have breached any portion of these AgentKit Terms or the Terms; (iv) if we suspect you may be a Prohibited Person or any wallet used to access the AgentKit Services is linked with any illegal or high-risk activity; and/or (v) if we determine such action is necessary to comply with these AgentKit Terms, any of our policies, procedures or practices, or any law, rule or regulation. Eigen Labs shall use commercially reasonable efforts to provide you with an opportunity to apply any remaining Credits to outstanding usage prior to termination where termination is initiated by Eigen Labs without cause. For the avoidance of doubt, unused Credits are non-refundable upon termination for any reason, except as required by applicable law.

Only you, as the deploying developer, may cancel your account or terminate your Agent's services. Your Agent has no authority to cancel, terminate, or otherwise modify the contractual relationship between you and Eigen Labs. Any purported cancellation or termination initiated by your Agent shall be null and void. You may cancel at any time by following the cancellation process set out in the Documentation, or by ceasing to fund your Credit balance, in which case your Agent will cease operation when its Credit balance reaches zero.

You acknowledge that upon termination, your Agent's private key remains within the TEE and KMS infrastructure and may become permanently inaccessible, and that any USDC held in your Agent Wallet at the time of termination may be subject to the limitations described in Section 4a. Termination under the AgentKit License shall not affect the applicability of this Section, which shall continue to govern.

All sections of these AgentKit Terms which by their nature should survive termination will survive, including accrued payment obligations, confidentiality obligations, warranty disclaimers, limitations of liability, and indemnification obligations.

## 14. Support

Eigen Labs may, but is not required to, provide you with commercially reasonable remote technical support services during Eigen Labs' normal business hours. Eigen Labs reserves the right to modify or discontinue support services at any time.

## 15. Disclaimer

THE AGENTKIT SERVICES, INCLUDING THE AGENTKIT CLI, MEDIA AGENT TEMPLATE, SCAFFOLD CODE, INFERENCE GATEWAY, AND ALL RELATED SERVICES, ARE PROVIDED "AS IS" AND EIGEN LABS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. EIGEN LABS DOES NOT WARRANT THAT THE AGENTKIT SERVICES WILL BE UNINTERRUPTED OR ERROR FREE, THAT YOUR AGENT WILL OPERATE AS INTENDED, OR THAT ANY AGENT CONTENT WILL BE ACCURATE, LAWFUL, OR APPROPRIATE.

## 16. Limitation of Liability

TO THE EXTENT NOT PROHIBITED BY LAW, YOU AGREE THAT IN NO EVENT WILL EIGEN LABS, ITS SUPPLIERS, OFFICERS, AFFILIATES, REPRESENTATIVES, CONTRACTORS OR EMPLOYEES BE LIABLE (A) FOR DAMAGES OF ANY KIND, INCLUDING INDIRECT, SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, LOSS OF USE, DATA OR PROFITS, BUSINESS INTERRUPTION OR ANY OTHER DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE AGENTKIT SERVICES), HOWEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, WHETHER UNDER THESE AGENTKIT TERMS OR OTHERWISE ARISING IN ANY WAY IN CONNECTION WITH THE AGENTKIT SERVICES OR THESE AGENTKIT TERMS AND WHETHER IN CONTRACT, STRICT LIABILITY OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) EVEN IF EIGEN LABS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE, OR (B) FOR ANY OTHER CLAIM, DEMAND OR DAMAGES WHATSOEVER RESULTING FROM OR ARISING OUT OF OR IN CONNECTION WITH THESE AGENTKIT TERMS OR THE DELIVERY, USE OR PERFORMANCE OF THE AGENTKIT SERVICES, AND EIGEN LABS' TOTAL LIABILITY TO YOU FOR ANY DAMAGES FINALLY AWARDED SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100.00).

## 17. Indemnification

You will indemnify and hold harmless Eigen Labs against any claims, actions, or demands, including reasonable legal and accounting fees, arising or resulting from: (a) your breach of these AgentKit Terms; (b) any claim arising out of Your Content, Agent Content, or your Agent's operation or activities; (c) your Agent's violation of any third party's rights or any applicable law or regulation; or (d) your other use or misuse of the AgentKit Services.

## 18. Assumption of Risks

You acknowledge and agree that deploying an autonomous Agent involves significant risks, including without limitation:

a. the risk that your Agent generates Agent Content that is inaccurate, unlawful, or harmful, and that you may be held liable for such content;

b. the risk of loss of Credits or inaccessibility of your Agent's wallet due to Agent malfunction, TEE failure, KMS unavailability, or third-party infrastructure failure; and

c. the risk that applicable laws relating to autonomous AI agents, digital assets, and online content are evolving and may change in ways that affect your obligations.

## 19. Miscellaneous

Eigen Labs may update these AgentKit Terms from time to time by posting notice at https://eigencloud.xyz and updating the "Last Revised" date above. Your continued use of the AgentKit Services after such changes constitutes acceptance. If any provision is found unenforceable, it will be limited to the minimum extent necessary and the remaining provisions will remain in full force and effect. You may not assign these AgentKit Terms without Eigen Labs' prior written consent. No agency, partnership, or employment is created by these AgentKit Terms. All notices will be in writing and delivered in accordance with the notice provisions of the Terms.
