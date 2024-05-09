export default function loadBalancer(chinaDownload, USDownnload) {
  return Promise.race([chinaDownload, USDownnload]);
}
