
// step-2  Created Document Interface
interface Document {
    void open();
}

// step-3 Concrete Document Classes
class WordDocument implements Document {
    public void open() {
        System.out.println("Word Document is opened");
    }
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("PDF Document is opened");
    }
}

class ExcelDocument implements Document {
    public void open() {
        System.out.println("Excel Document is opened");
    }
}

// step-4.1 Created abstract class
abstract class DocumentFactory {
    public abstract Document createDocument();
}

// step-4.2 Created Concrete Factories
class WordFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}

class PdfFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}

class ExcelFactory extends DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}

// step-5 Created Test Class
public class DocumentManagement {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordFactory();
        Document word = wordFactory.createDocument();
        word.open();

        DocumentFactory pdfFactory = new PdfFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();

        DocumentFactory excelFactory = new ExcelFactory();
        Document excel = excelFactory.createDocument();
        excel.open();
    }
}
