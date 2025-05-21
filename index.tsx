import {NativeModules} from 'react-native';
const {EzPrinter} = NativeModules;

export enum FontSize {
  Default = 0,
  Small = 1,
  Medium = 2,
  Big = 3,
  DoubleHeight = 4,
  DoubleWidth = 5,
  SmallBold = 6,
  MediumBold = 7,
  BigBold = 8,
  DoubleHeightBold = 9,
  DoubleWidthBold = 10,
}

export enum AlignmentType {
  Left = 1,
  Center = 2,
  Right = 3,
}

export enum BarcodeType {
  barcodeUpca = 0,
  barcodeUpce = 1,
  barcodeEan8 = 2,
  barcodeEan13 = 3,
  barcodeCode128 = 4,
  barcodeCode39 = 5,
  barcodeCodeBar = 6,
  barcodeItf = 7,
  barcodeCode93 = 8,
  barcodeQrCode = 0x80,
}

type EzPrinterType = {
  /**
   * Start printing. Except for image printing, other APIs, such as drawText, just draw the printing content in the memory first, and the printing has not been started yet.
   * This method is to print out the printing content in the memory.Control whether to automatically feed paper through isAutoFeed
   */
  printText: (isAutoFeed: boolean) => void;
  /**
   * Draw printed text into memory, you can specify the position and font size of the printed text, and you can print the left, middle, and right text at the same line
   * You can continuously use drawText to draw all the contents into memory, and finally use printText to print the contents.
   */
  drawText: (
    strLeft: string,
    fontLeft: FontSize,
    strMid: string,
    fontMid: FontSize,
    strRight: string,
    fontRight: FontSize,
  ) => void;
  /**
   * Draw printed text into memory, you can print left-aligned and right-aligned content at the same line. It needs to be printed using printText.
   */
  drawLeftRight: (
    strLeft: string,
    fontLeft: FontSize,
    strRight: string,
    fontRight: FontSize,
  ) => void;
  /**
   * Draw text content to memory, you can specify the size and position of the content. It needs to be printed using printText.
   */
  drawCustom: (
    string: string,
    fontSize: FontSize,
    align: AlignmentType,
  ) => void;
  /**
   * Draw a blank line, similar to a newline.
   */
  drawNewLine: () => void;
  /**
   * Draw a horizontal line, you can specify the thickness of the horizontal line by setting the font size.
   */
  drawOneLine: (fontSize: FontSize) => void;
  /**
   * Draw a horizontal line, use the default font without specifying the font size
   */
  drawOneLineDefault(): void;
  /**
   * Draw barcodes, including qrcode, you can specify the alignment position and barcode type of the barcode.
   */
  drawBarcode: (str: string, align: AlignmentType, type: BarcodeType) => void;
  /**
   * Draw barcodes, including qrcode, you can specify the alignment position and barcode type of the barcode.
   * The height of the barcode can be specified. No width parameter is required, the width is determined by the specific barcode
   */
  drawBarcodeWithHeight: (
    str: string,
    align: AlignmentType,
    type: BarcodeType,
    height: number,
  ) => void;
   /**
   * Draw qrcode,you can specify the alignment position of the qrcode.
   */
  drawQrCode: (str: string, align: AlignmentType) => void;
  /**
   * Draw qrcode,you can specify the alignment position of the qrcode.
   * The height of the qrcode can be specified. No width parameter is required, the width is determined by the specific qrcode
   */
  drawQrCodeWithHeight: (
    str: string,
    align: AlignmentType,
    height: number,
  ) => void;  
  
  /**
   * Check whether printing is supported. This method returns true only on goodcom printers. This method allows the app to distinguish printers from different manufacturers.
   */
  isDeviceSupport: () => Promise<string>;
  /**
   * Print the content in json format, which will be parsed by the printer according to the template and formatted for printing
   */
  printJson: (json: string) => void;
  /**
   * Printing an image using base64 encoding, the Base64 string must start with "data:image/png;base64,"
   * You can set the alignment position of the printed image, and decide whether to automatically feed the paper after printing.
   * If you want to print the text after printing the image, the paper will not be automatically fed.
   */
  printImageByBase64: (
    base64: string,
    align: AlignmentType,
    isAutoFeed: Boolean,
  ) => void;
  /**
   * Printing an image using byteArray
   * You can set the alignment position of the printed image, and decide whether to automatically feed the paper after printing.
   * If you want to print the text after printing the image, the paper will not be automatically fed.
   */
  printImageByArray: (
    byteArray: number[],
    align: AlignmentType,
    isAutoFeed: Boolean,
  ) => void;
  /**
  * Open the cash box,it will be opened once when called.
  */
  openCashBox:()=>void;
  /**
  * Show bitmap in customer display LCD (image using base64 encoding), The maximum size is 240 * 320.
  * Images smaller than the customer display screen will be displayed in the center.
  */
  showLcdBitmapByBase64:(
    base64: string
  ) => void;
  /**
  * Show bitmap in customer display LCD (image using byteArray), The maximum size is 240 * 320.
  * Images smaller than the customer display screen will be displayed in the center.
  */
  showLcdBitmapByArray:(
    byteArray: number[]
  ) => void;
};
export default EzPrinter as EzPrinterType;
