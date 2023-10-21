import { BlobServiceClient } from "@azure/storage-blob";
import { v4 as uuidv4 } from 'uuid';
export class BlobHelper {
constructor(connStr,containerName){
this.connStr=connStr;
this.containerName=containerName;
this.blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
 var container=this.blobServiceClient.getContainerClient(containerName);
 container.createIfNotExists({ access: "container"} );
 this.containerClient=container;
}
async GetContainer(){
    console.log(this.containerClient);
    // var createContainerResponse = await this.containerClient.create();
    // console.log(`Create container ${this.containerName} successfully`);
    // this.containerClient=createContainerResponse;
}
 async UploadBlob(file) {
    const blobName = "staff/"+uuidv4();
    const blockBlobClient = this.containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse =await blockBlobClient.uploadData(file.buffer, {
        blobHTTPHeaders: {
          blobContentType: file.mimetype,
        },
      });
    console.log(`Upload block blob ${blobName} successfully`);
  
}
   
}