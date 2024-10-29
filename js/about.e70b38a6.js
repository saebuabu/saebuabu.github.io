"use strict";(self["webpackChunkaitooling"]=self["webpackChunkaitooling"]||[]).push([[594],{4322:function(e,t,n){n(4114),t.SchemaType=void 0,function(e){e["STRING"]="string",e["NUMBER"]="number",e["INTEGER"]="integer",e["BOOLEAN"]="boolean",e["ARRAY"]="array",e["OBJECT"]="object"}(t.SchemaType||(t.SchemaType={})),
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t.ExecutableCodeLanguage=void 0,function(e){e["LANGUAGE_UNSPECIFIED"]="language_unspecified",e["PYTHON"]="python"}(t.ExecutableCodeLanguage||(t.ExecutableCodeLanguage={})),t.Outcome=void 0,function(e){e["OUTCOME_UNSPECIFIED"]="outcome_unspecified",e["OUTCOME_OK"]="outcome_ok",e["OUTCOME_FAILED"]="outcome_failed",e["OUTCOME_DEADLINE_EXCEEDED"]="outcome_deadline_exceeded"}(t.Outcome||(t.Outcome={}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o=["user","model","function","system"];t.HarmCategory=void 0,function(e){e["HARM_CATEGORY_UNSPECIFIED"]="HARM_CATEGORY_UNSPECIFIED",e["HARM_CATEGORY_HATE_SPEECH"]="HARM_CATEGORY_HATE_SPEECH",e["HARM_CATEGORY_SEXUALLY_EXPLICIT"]="HARM_CATEGORY_SEXUALLY_EXPLICIT",e["HARM_CATEGORY_HARASSMENT"]="HARM_CATEGORY_HARASSMENT",e["HARM_CATEGORY_DANGEROUS_CONTENT"]="HARM_CATEGORY_DANGEROUS_CONTENT"}(t.HarmCategory||(t.HarmCategory={})),t.HarmBlockThreshold=void 0,function(e){e["HARM_BLOCK_THRESHOLD_UNSPECIFIED"]="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e["BLOCK_LOW_AND_ABOVE"]="BLOCK_LOW_AND_ABOVE",e["BLOCK_MEDIUM_AND_ABOVE"]="BLOCK_MEDIUM_AND_ABOVE",e["BLOCK_ONLY_HIGH"]="BLOCK_ONLY_HIGH",e["BLOCK_NONE"]="BLOCK_NONE"}(t.HarmBlockThreshold||(t.HarmBlockThreshold={})),t.HarmProbability=void 0,function(e){e["HARM_PROBABILITY_UNSPECIFIED"]="HARM_PROBABILITY_UNSPECIFIED",e["NEGLIGIBLE"]="NEGLIGIBLE",e["LOW"]="LOW",e["MEDIUM"]="MEDIUM",e["HIGH"]="HIGH"}(t.HarmProbability||(t.HarmProbability={})),t.BlockReason=void 0,function(e){e["BLOCKED_REASON_UNSPECIFIED"]="BLOCKED_REASON_UNSPECIFIED",e["SAFETY"]="SAFETY",e["OTHER"]="OTHER"}(t.BlockReason||(t.BlockReason={})),t.FinishReason=void 0,function(e){e["FINISH_REASON_UNSPECIFIED"]="FINISH_REASON_UNSPECIFIED",e["STOP"]="STOP",e["MAX_TOKENS"]="MAX_TOKENS",e["SAFETY"]="SAFETY",e["RECITATION"]="RECITATION",e["LANGUAGE"]="LANGUAGE",e["OTHER"]="OTHER"}(t.FinishReason||(t.FinishReason={})),t.TaskType=void 0,function(e){e["TASK_TYPE_UNSPECIFIED"]="TASK_TYPE_UNSPECIFIED",e["RETRIEVAL_QUERY"]="RETRIEVAL_QUERY",e["RETRIEVAL_DOCUMENT"]="RETRIEVAL_DOCUMENT",e["SEMANTIC_SIMILARITY"]="SEMANTIC_SIMILARITY",e["CLASSIFICATION"]="CLASSIFICATION",e["CLUSTERING"]="CLUSTERING"}(t.TaskType||(t.TaskType={})),t.FunctionCallingMode=void 0,function(e){e["MODE_UNSPECIFIED"]="MODE_UNSPECIFIED",e["AUTO"]="AUTO",e["ANY"]="ANY",e["NONE"]="NONE"}(t.FunctionCallingMode||(t.FunctionCallingMode={})),t.DynamicRetrievalMode=void 0,function(e){e["MODE_UNSPECIFIED"]="MODE_UNSPECIFIED",e["MODE_DYNAMIC"]="MODE_DYNAMIC"}(t.DynamicRetrievalMode||(t.DynamicRetrievalMode={}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class i extends s{constructor(e,t){super(e),this.response=t}}class a extends s{constructor(e,t,n,o){super(e),this.status=t,this.statusText=n,this.errorDetails=o}}class r extends s{}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c="https://generativelanguage.googleapis.com",l="v1beta",d="0.21.0",u="genai-js";var h;(function(e){e["GENERATE_CONTENT"]="generateContent",e["STREAM_GENERATE_CONTENT"]="streamGenerateContent",e["COUNT_TOKENS"]="countTokens",e["EMBED_CONTENT"]="embedContent",e["BATCH_EMBED_CONTENTS"]="batchEmbedContents"})(h||(h={}));class f{constructor(e,t,n,o,s){this.model=e,this.task=t,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var e,t;const n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||l,o=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||c;let s=`${o}/${n}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function g(e){const t=[];return(null===e||void 0===e?void 0:e.apiClient)&&t.push(e.apiClient),t.push(`${u}/${d}`),t.join(" ")}async function p(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",g(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let o=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(s){throw new r(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${s.message}`)}for(const[e,t]of o.entries()){if("x-goog-api-key"===e)throw new r(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new r(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function m(e,t,n,o,s,i){const a=new f(e,t,n,o,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},O(i)),{method:"POST",headers:await p(a),body:s})}}async function E(e,t,n,o,s,i={},a=fetch){const{url:r,fetchOptions:c}=await m(e,t,n,o,s,i);return C(r,c,a)}async function C(e,t,n=fetch){let o;try{o=await n(e,t)}catch(s){v(s,e)}return o.ok||await y(o,e),o}function v(e,t){let n=e;throw e instanceof a||e instanceof r||(n=new s(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function y(e,t){let n,o="";try{const t=await e.json();o=t.error.message,t.error.details&&(o+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(s){}throw new a(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${o}`,e.status,e.statusText,n)}function O(e){const t={};if(void 0!==(null===e||void 0===e?void 0:e.signal)||(null===e||void 0===e?void 0:e.timeout)>=0){const n=new AbortController;(null===e||void 0===e?void 0:e.timeout)>=0&&setTimeout((()=>n.abort()),e.timeout),(null===e||void 0===e?void 0:e.signal)&&e.signal.addEventListener("abort",(()=>{n.abort()})),t.signal=n.signal}return t}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new i(`${w(e)}`,e);return I(e)}if(e.promptFeedback)throw new i(`Text not available. ${w(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new i(`${w(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),T(e)[0]}if(e.promptFeedback)throw new i(`Function call not available. ${w(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new i(`${w(e)}`,e);return T(e)}if(e.promptFeedback)throw new i(`Function call not available. ${w(e)}`,e)},e}function I(e){var t,n,o,s;const i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(const a of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+"\n"+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function T(e){var t,n,o,s;const i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(const a of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)a.functionCall&&i.push(a.functionCall);return i.length>0?i:void 0}const R=[t.FinishReason.RECITATION,t.FinishReason.SAFETY,t.FinishReason.LANGUAGE];function A(e){return!!e.finishReason&&R.includes(e.finishReason)}function w(e){var t,n,o;let s="";if(e.candidates&&0!==e.candidates.length||!e.promptFeedback){if(null===(o=e.candidates)||void 0===o?void 0:o[0]){const t=e.candidates[0];A(t)&&(s+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(s+=`: ${t.finishMessage}`))}}else s+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(s+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);return s}function S(e){return this instanceof S?(this.v=e,this):new S(e)}function N(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(e,t||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(e){s[e]&&(o[e]=function(t){return new Promise((function(n,o){i.push([e,t,n,o])>1||r(e,t)}))})}function r(e,t){try{c(s[e](t))}catch(n){u(i[0][3],n)}}function c(e){e.value instanceof S?Promise.resolve(e.value.v).then(l,d):u(i[0][2],e)}function l(e){r("next",e)}function d(e){r("throw",e)}function u(e,t){e(t),i.shift(),i.length&&r(i[0][0],i[0][1])}}"function"===typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function M(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=D(t),[o,s]=n.tee();return{stream:L(o),response:k(s)}}async function k(e){const t=[],n=e.getReader();while(1){const{done:e,value:o}=await n.read();if(e)return _(H(t));t.push(o)}}function L(e){return N(this,arguments,(function*(){const t=e.getReader();while(1){const{value:e,done:n}=yield S(t.read());if(n)break;yield yield S(_(e))}}))}function D(e){const t=e.getReader(),n=new ReadableStream({start(e){let n="";return o();function o(){return t.read().then((({value:t,done:i})=>{if(i)return n.trim()?void e.error(new s("Failed to parse stream")):void e.close();n+=t;let a,r=n.match(b);while(r){try{a=JSON.parse(r[1])}catch(c){return void e.error(new s(`Error parsing JSON response: "${r[1]}"`))}e.enqueue(a),n=n.substring(r[0].length),r=n.match(b)}return o()}))}}});return n}function H(e){const t=e[e.length-1],n={promptFeedback:null===t||void 0===t?void 0:t.promptFeedback};for(const o of e){if(o.candidates)for(const e of o.candidates){const t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].groundingMetadata=e.groundingMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});const o={};for(const s of e.content.parts)s.text&&(o.text=s.text),s.functionCall&&(o.functionCall=s.functionCall),s.executableCode&&(o.executableCode=s.executableCode),s.codeExecutionResult&&(o.codeExecutionResult=s.codeExecutionResult),0===Object.keys(o).length&&(o.text=""),n.candidates[t].content.parts.push(o)}}o.usageMetadata&&(n.usageMetadata=o.usageMetadata)}return n}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x(e,t,n,o){const s=await E(t,h.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o);return M(s)}async function G(e,t,n,o){const s=await E(t,h.GENERATE_CONTENT,e,!1,JSON.stringify(n),o),i=await s.json(),a=_(i);return{response:a}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){if(null!=e)return"string"===typeof e?{role:"system",parts:[{text:e}]}:e.text?{role:"system",parts:[e]}:e.parts?e.role?e:{role:"system",parts:e.parts}:void 0}function P(e){let t=[];if("string"===typeof e)t=[{text:e}];else for(const n of e)"string"===typeof n?t.push({text:n}):t.push(n);return U(t)}function U(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,i=!1;for(const s of e)"functionResponse"in s?(n.parts.push(s),i=!0):(t.parts.push(s),o=!0);if(o&&i)throw new s("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!i)throw new s("No content is provided for sending chat message.");return o?t:n}function j(e,t){var n;let o={model:null===t||void 0===t?void 0:t.model,generationConfig:null===t||void 0===t?void 0:t.generationConfig,safetySettings:null===t||void 0===t?void 0:t.safetySettings,tools:null===t||void 0===t?void 0:t.tools,toolConfig:null===t||void 0===t?void 0:t.toolConfig,systemInstruction:null===t||void 0===t?void 0:t.systemInstruction,cachedContent:null===(n=null===t||void 0===t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]};const s=null!=e.generateContentRequest;if(e.contents){if(s)throw new r("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(s)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{const t=P(e);o.contents=[t]}return{generateContentRequest:o}}function $(e){let t;if(e.contents)t=e;else{const n=P(e);t={contents:[n]}}return e.systemInstruction&&(t.systemInstruction=F(e.systemInstruction)),t}function B(e){if("string"===typeof e||Array.isArray(e)){const t=P(e);return{content:t}}return e}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Y={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function q(e){let t=!1;for(const n of e){const{role:e,parts:i}=n;if(!t&&"user"!==e)throw new s(`First content should be with role 'user', got ${e}`);if(!o.includes(e))throw new s(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(o)}`);if(!Array.isArray(i))throw new s("Content should have 'parts' property with an array of Parts");if(0===i.length)throw new s("Each Content should have at least one part");const a={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const t of i)for(const e of K)e in t&&(a[e]+=1);const r=Y[e];for(const t of K)if(!r.includes(t)&&a[t]>0)throw new s(`Content with role '${e}' can't contain '${t}' part`);t=!0}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J="SILENT_ERROR";class V{constructor(e,t,n,o={}){this.model=t,this.params=n,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null===n||void 0===n?void 0:n.history)&&(q(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,o,s,i,a,r;await this._sendPromise;const c=P(e),l={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},d=Object.assign(Object.assign({},this._requestOptions),t);let u;return this._sendPromise=this._sendPromise.then((()=>G(this._apiKey,this.model,l,d))).then((e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(c);const n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{const t=w(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}u=e})),await this._sendPromise,u}async sendMessageStream(e,t={}){var n,o,s,i,a,r;await this._sendPromise;const c=P(e),l={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},d=Object.assign(Object.assign({},this._requestOptions),t),u=x(this._apiKey,this.model,l,d);return this._sendPromise=this._sendPromise.then((()=>u)).catch((e=>{throw new Error(J)})).then((e=>e.response)).then((e=>{if(e.candidates&&e.candidates.length>0){this._history.push(c);const t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{const t=w(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}})).catch((e=>{e.message!==J&&console.error(e)})),u}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t,n,o){const s=await E(t,h.COUNT_TOKENS,e,!1,JSON.stringify(n),o);return s.json()}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t,n,o){const s=await E(t,h.EMBED_CONTENT,e,!1,JSON.stringify(n),o);return s.json()}async function z(e,t,n,o){const s=n.requests.map((e=>Object.assign(Object.assign({},e),{model:t}))),i=await E(t,h.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o);return i.json()}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=F(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;const o=$(e),s=Object.assign(Object.assign({},this._requestOptions),t);return G(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}async generateContentStream(e,t={}){var n;const o=$(e),s=Object.assign(Object.assign({},this._requestOptions),t);return x(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}startChat(e){var t;return new V(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){const n=j(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),t);return X(this.apiKey,this.model,n,o)}async embedContent(e,t={}){const n=B(e),o=Object.assign(Object.assign({},this._requestOptions),t);return W(this.apiKey,this.model,n,o)}async batchEmbedContents(e,t={}){const n=Object.assign(Object.assign({},this._requestOptions),t);return z(this.apiKey,this.model,e,n)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new s("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Q(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new r("Cached content must contain a `name` field.");if(!e.model)throw new r("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const i of o)if((null===t||void 0===t?void 0:t[i])&&e[i]&&(null===t||void 0===t?void 0:t[i])!==e[i]){if("model"===i){const n=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,o=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(n===o)continue}throw new r(`Different value for "${i}" specified in modelParams (${t[i]}) and cachedContent (${e[i]})`)}const s=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Q(this.apiKey,s,n)}}t.ChatSession=V,t.GenerativeModel=Q,t.GoogleGenerativeAI=Z,t.GoogleGenerativeAIError=s,t.GoogleGenerativeAIFetchError=a,t.GoogleGenerativeAIRequestInputError=r,t.GoogleGenerativeAIResponseError=i,t.POSSIBLE_ROLES=o},5499:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var o=n(6768),s=n(5130),i=n(4232);function a(e,t,n,a,r,c){return(0,o.uX)(),(0,o.CE)("div",null,[t[2]||(t[2]=(0,o.Lk)("h1",null,"AI Pagina test 1",-1)),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.prompt=e),placeholder:"Voer uw prompt in"},null,512),[[s.Jo,r.prompt]]),(0,o.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>c.getAnswer&&c.getAnswer(...e))},"Verstuur"),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.chatsession,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id},[(0,o.Lk)("pre",null,(0,i.v_)(e.prompt)+": "+(0,i.v_)(e.answer),1)])))),128))])}n(4114);const{GoogleGenerativeAI:r}=n(4322),c=new r("AIzaSyCG1D3C1h5-i72CwApnVv9v1ghVqDGHqJw"),l=c.getGenerativeModel({model:"gemini-1.5-flash"});var d={data(){return{prompt:"",answer:"",chatsession:[]}},methods:{async getAnswer(){const e=await l.generateContent(this.prompt);this.answer=`${e.response.text()}`,this.chatsession.push({id:this.chatsession.length,prompt:this.prompt,answer:this.answer}),this.prompt=""}}},u=n(1241);const h=(0,u.A)(d,[["render",a],["__scopeId","data-v-65451635"]]);var f=h},9206:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var o=n(6768),s=n(4232);const i={key:0},a={key:1};function r(e,t,n,r,c,l){return(0,o.uX)(),(0,o.CE)("div",null,[t[1]||(t[1]=(0,o.Lk)("h1",null,"Naamherkenning",-1)),t[2]||(t[2]=(0,o.Lk)("p",null,"Spreek de naam van de leerling en kijk of de naam wordt herkend.",-1)),(0,o.Lk)("p",null," Te herkennen namen zijn: "+(0,s.v_)(r.namenLijst),1),(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>r.startLuisteren&&r.startLuisteren(...e))},(0,s.v_)(r.instructie),1),r.herkendeNaam?((0,o.uX)(),(0,o.CE)("p",i,"Herkende naam: "+(0,s.v_)(r.herkendeNaam),1)):((0,o.uX)(),(0,o.CE)("p",a,"Geen bekende naam gevonden."))])}n(4114);var c=n(144);const l=";1;367913;;;;;Abdullah Al-Anesi\n;2;360640;;;;;Joris van Beers\n;3;373761;;;;;Rob van den Biggelaar\n;4;330083;;;;;Robin Boersma\n;5;372936;;;;;Alyssia Gülük\n;6;374680;;;;;Milan van Hemert\n;7;374407;;;;;Wilco van den Heuvel\n;8;333886;;;;;Ricardo Kerssens\n;9;377402;;;;;Stan van Pinxten\n;10;342229;;;;;Ian Pipe\n;11;375520;;;;;Jacques Prinsen\n;12;366671;;;;;Noah Schrijver\n;13;376625;;;;;Duc-Tan Ta\n;14;377571;;;;;Stef Tax\n;15;376444;;;;;Marijn van Vugt\n;16;363822;;;;;Angelo Weesenaar\n;17;375871;;;;;Job Zoutewelle",d=l.split("\n").map((e=>e.split(";")[7].split(" ")[0]));var u=d,h={setup(){const e=(0,c.KR)([...u]),t=(0,c.KR)(null),n=(0,c.KR)("Start met luisteren"),o=()=>{navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({audio:!0}).then((e=>{const o=window.SpeechRecognition||window.webkitSpeechRecognition,i=new o;i.lang="nl-NL",i.onresult=e=>{const n=e.results[0][0].transcript,o=s(n);t.value=o},i.start(),i.onstart=()=>{n.value="Ik luister..."},i.onend=()=>{e.getTracks().forEach((e=>e.stop())),n.value="Start opnieuw met luisteren"}})).catch((e=>{console.error("Fout bij het gebruiken van de microfoon:",e)})):console.error("De browser ondersteunt geen getUserMedia")},s=t=>{let n=e.value.find((e=>t.includes(e)));return n||(e.value.push(t),n=t),n};return{startLuisteren:o,herkendeNaam:t,namenLijst:e,instructie:n}}},f=n(1241);const g=(0,f.A)(h,[["render",r]]);var p=g}}]);
//# sourceMappingURL=about.e70b38a6.js.map