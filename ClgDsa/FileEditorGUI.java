import java.awt.*;
import java.io.*;
import java.util.Scanner;
import javax.swing.*;

public class FileEditorGUI extends JFrame {
    private JTextArea textArea;
    private JButton openButton, saveButton, clearButton;
    private JLabel statusLabel;
    private File currentFile;

    public FileEditorGUI() {
        // Set up the frame
        setTitle("File Reader and Editor");
        setSize(700, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Create text area with scroll pane
        textArea = new JTextArea();
        textArea.setFont(new Font("Monospaced", Font.PLAIN, 14));
        textArea.setLineWrap(true);
        textArea.setWrapStyleWord(true);
        JScrollPane scrollPane = new JScrollPane(textArea);
        add(scrollPane, BorderLayout.CENTER);

        // Create button panel
        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new FlowLayout());

        openButton = new JButton("Open File");
        saveButton = new JButton("Save File");
        clearButton = new JButton("Clear");

        buttonPanel.add(openButton);
        buttonPanel.add(saveButton);
        buttonPanel.add(clearButton);
        add(buttonPanel, BorderLayout.NORTH);

        // Create status label
        statusLabel = new JLabel("Ready");
        statusLabel.setBorder(BorderFactory.createEmptyBorder(5, 10, 5, 10));
        add(statusLabel, BorderLayout.SOUTH);

        // Add action listeners
        openButton.addActionListener(e -> openFile());
        saveButton.addActionListener(e -> saveFile());
        clearButton.addActionListener(e -> clearText());

        setVisible(true);
    }

    // Method to open and read file
    private void openFile() {
        JFileChooser fileChooser = new JFileChooser();
        int result = fileChooser.showOpenDialog(this);

        if (result == JFileChooser.APPROVE_OPTION) {
            currentFile = fileChooser.getSelectedFile();
            try {
                // Read file using Scanner
                Scanner reader = new Scanner(currentFile);
                textArea.setText("");
                
                while (reader.hasNextLine()) {
                    String line = reader.nextLine();
                    textArea.append(line + "\n");
                }
                reader.close();
                statusLabel.setText("File opened: " + currentFile.getName());
            } catch (FileNotFoundException e) {
                JOptionPane.showMessageDialog(this, 
                    "Error reading file: " + e.getMessage(),
                    "Error", JOptionPane.ERROR_MESSAGE);
                statusLabel.setText("Error opening file");
            }
        }
    }

    // Method to save/update file
    private void saveFile() {
        if (currentFile == null) {
            // If no file is open, use Save As
            JFileChooser fileChooser = new JFileChooser();
            int result = fileChooser.showSaveDialog(this);
            
            if (result == JFileChooser.APPROVE_OPTION) {
                currentFile = fileChooser.getSelectedFile();
            } else {
                return;
            }
        }

        try {
            // Write to file
            FileWriter writer = new FileWriter(currentFile);
            writer.write(textArea.getText());
            writer.close();
            statusLabel.setText("File saved: " + currentFile.getName());
            JOptionPane.showMessageDialog(this, 
                "File saved successfully!",
                "Success", JOptionPane.INFORMATION_MESSAGE);
        } catch (IOException e) {
            JOptionPane.showMessageDialog(this, 
                "Error saving file: " + e.getMessage(),
                "Error", JOptionPane.ERROR_MESSAGE);
            statusLabel.setText("Error saving file");
        }
    }

    // Method to clear text area
    private void clearText() {
        int choice = JOptionPane.showConfirmDialog(this,
            "Are you sure you want to clear all text?",
            "Confirm Clear", JOptionPane.YES_NO_OPTION);
        
        if (choice == JOptionPane.YES_OPTION) {
            textArea.setText("");
            currentFile = null;
            statusLabel.setText("Text cleared");
        }
    }

    public static void main(String[] args) {
        // Run GUI on Event Dispatch Thread
        SwingUtilities.invokeLater(() -> new FileEditorGUI());
    }
}
