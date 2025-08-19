#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>
#include <ctype.h>

#define MAX_VOTERS 100
#define MAX_CANDIDATES 10
#define NAME_LENGTH 50
#define PHONE_NUMBER_LENGTH 11
#define AADHAAR_LENGTH 13  
typedef struct {
    char name[NAME_LENGTH];
    int votes;
} Candidate;


typedef struct {
    char name[NAME_LENGTH];
    char epicID[20];
    char aadhaar[13]; 
    char phoneNumber[PHONE_NUMBER_LENGTH];  
    bool hasVoted;
} Voter;


// Global variables
Candidate candidates[MAX_CANDIDATES];
Voter voters[MAX_VOTERS];
int candidateCount = 0; 
int voterCount = 0;     
bool isElectionOngoing = false; 


void clearScreen() {
    printf("\033[H\033[J"); 
}

// Function to validate name
bool isValidName(const char *name) {
    // Check if the name is empty
    if (strlen(name) == 0) {
        return false;
    }

    
    for (int i = 0; i < strlen(name); i++) {
        if (!isalpha(name[i]) && name[i] != ' ') {
            return false; // If contains non-alphabetic characters
        }
    }
    
    return true;
}

// Function to validate phone number
bool isValidPhoneNumber(const char *phoneNumber) {
    // Check if it has exactly 10 digits
    if (strlen(phoneNumber) != 10) {
        return false;
    }

    // Check if the phone number contains only digits
    for (int i = 0; i < 10; i++) {
        if (!isdigit(phoneNumber[i])) {
            return false;
        }
    }

    return true;
}

//  Aadhaar number
bool isValidAadhaar(const char *aadhaar) {
    //   12 digits
    if (strlen(aadhaar) != 12) {
        return false;
    }

    //  only digits
    for (int i = 0; i < 12; i++) {
        if (!isdigit(aadhaar[i])) {
            return false;
        }
    }

    return true;
}


void setupElection() {
    if (isElectionOngoing) {
        printf("An election is already in progress. Please end the current election before starting a new one.\n");
       
    }

    clearScreen();
    printf("===== Election Setup =====\n");

    // Register candidates
    printf("Enter the number of candidates (max %d): ", MAX_CANDIDATES);
    scanf("%d", &candidateCount);
    if (candidateCount > MAX_CANDIDATES || candidateCount <= 0) {
        printf("Invalid number of candidates. Please restart the setup.\n");
        
    }

    printf("\nEnter the names of the candidates:\n");
    for (int i = 0; i < candidateCount; i++) {
        while (true) {
            printf("Candidate %d: ", i + 1);
            scanf(" %49[^\n]", candidates[i].name);

            if (!isValidName(candidates[i].name)) {
                printf("Invalid name. Please enter a valid name (letters and spaces only).\n");
            } else {
                candidates[i].votes = 0; 
                break;
            }
        }
    }

    // Register voters
    printf("\nEnter the number of voters (max %d): ", MAX_VOTERS);
    scanf("%d", &voterCount);
    if (voterCount > MAX_VOTERS || voterCount <= 0) {
        printf("Invalid number of voters. Please restart the setup.\n");
        
    }

    printf("\nEnter the details of the voters:\n");
    for (int i = 0; i < voterCount; i++) {
        while (true) {
            printf("Voter %d Name: ", i + 1);
            scanf(" %49[^\n]", voters[i].name);

            if (!isValidName(voters[i].name)) {
                printf("Invalid name. Please enter a valid name (letters and spaces only).\n");
            } else {
                break;
            }
        }

        printf("Voter %d EPIC ID: ", i + 1);
        scanf(" %19s", voters[i].epicID);

        
        while (true) {
            printf("Voter %d Aadhaar Number (12 digits): ", i + 1);
            scanf(" %12s", voters[i].aadhaar);

            
            int ch;
            while ((ch = getchar()) != '\n' && ch != EOF);


            if (!isValidAadhaar(voters[i].aadhaar)) {
                printf("Invalid Aadhaar number. Please enter exactly 12 digits.\n");
            } else {
                break;
            }
        }

        
        while (true) {
            printf("Voter %d Phone Number (10 digits): ", i + 1);
            scanf(" %10s", voters[i].phoneNumber);

            // Validate phone number
            if (!isValidPhoneNumber(voters[i].phoneNumber)) {
                printf("Invalid phone number. Please enter exactly 10 digits.\n");
            } else {
                break;
            }
        }

        voters[i].hasVoted = false; 
    }

    isElectionOngoing = true; 
    printf("\nElection setup complete!\n");
}


int verifyVoter(char *epicID, char *aadhaar) {
    for (int i = 0; i < voterCount; i++) {
        if (strcmp(voters[i].epicID, epicID) == 0 &&
            strcmp(voters[i].aadhaar, aadhaar) == 0) {
            return i;
        }
    }
    return -1; 
}


void castVote() {
    if (!isElectionOngoing) {
        printf("No election is currently ongoing. Please set up an election first.\n");
        
    }

    clearScreen();
    printf("===== Cast Your Vote =====\n");

    
    char epicID[20];
    char aadhaar[13];
    printf("Enter your EPIC ID: ");
    scanf(" %19s", epicID);
    printf("Enter your Aadhaar Number (12 digits): ");
    scanf(" %12s", aadhaar);

    // Verify voter
    int voterIndex = verifyVoter(epicID, aadhaar);
    if (voterIndex == -1) {
        printf("Invalid EPIC ID or Aadhaar number. Please try again.\n");
       
    }

    
    if (voters[voterIndex].hasVoted) {
        printf("You have already voted.\n");
        
    }

    
    printf("\nCandidates:\n");
    for (int i = 0; i < candidateCount; i++) {
        printf("%d. %s\n", i + 1, candidates[i].name);
    }

    
    int choice;
    printf("\nEnter the number corresponding to your choice: ");
    scanf("%d", &choice);

    if (choice < 1 || choice > candidateCount) {
        printf("Invalid choice. Please try again.\n");
        
    }

    candidates[choice - 1].votes++; 
    voters[voterIndex].hasVoted = true; 
    printf("Thank you! Your vote has been cast successfully.\n");
}


void saveElectionResults() {
    FILE *file = fopen("election_results.txt", "w");
    if (file == NULL) {
        printf("Error: Unable to save election results.\n");
      
    }

    fprintf(file, "===== Election Results =====\n\n");

    
    fprintf(file, "Candidates and Votes:\n");
    for (int i = 0; i < candidateCount; i++) {
        fprintf(file, "%s: %d votes\n", candidates[i].name, candidates[i].votes);
    }

    
    fprintf(file, "\nVoter Details:\n");
    for (int i = 0; i < voterCount; i++) {
        fprintf(file, "Name: %s, EPIC ID: %s, Aadhaar: %s, Phone: %s, Voted: %s\n",
                voters[i].name, voters[i].epicID, voters[i].aadhaar,
                voters[i].phoneNumber, voters[i].hasVoted ? "Yes" : "No");
    }

    fclose(file);
    printf("Election results have been saved to 'election_results.txt'.\n");
}


void readElectionResults() {
    FILE *file = fopen("election_results.txt", "r");
    if (file == NULL) {
        printf("Error: No saved election results found.\n");
        
    }

    char ch;
    printf("===== Stored Election Results =====\n\n");
    while ((ch = fgetc(file)) != EOF) {
        putchar(ch);
    }

    fclose(file);
}


void displayResults() {
    if (!isElectionOngoing) {
        printf("No election is currently ongoing. Please set up an election first.\n");
        
    }

    clearScreen();
    printf("===== Election Results =====\n");

    printf("\nVotes received by each candidate:\n");
    for (int i = 0; i < candidateCount; i++) {
        printf("%s: %d votes\n", candidates[i].name, candidates[i].votes);
    }

    printf("\nVoters who have cast their votes:\n");
    for (int i = 0; i < voterCount; i++) {
        if (voters[i].hasVoted) {
            printf("%s (EPIC ID: %s, Aadhaar: %s, Phone: %s)\n",
                   voters[i].name, voters[i].epicID, voters[i].aadhaar, voters[i].phoneNumber);
        }
    }

    // Save results
    saveElectionResults();
}

// Ends the current election
void endElection() {
    if (!isElectionOngoing) {
        printf("No election is currently ongoing to end.\n");
      
    }

    clearScreen();
    printf("===== End Election =====\n");

    // Reset all data
    candidateCount = 0;
    voterCount = 0;
    isElectionOngoing = false;

    printf("The election has been successfully ended. You can now set up a new election.\n");
}

// Main
int main() {
    int choice;

    do {
        clearScreen();
        printf("Secure Voting System\n");
        printf("1. Setup New Election\n");
        printf("2. Cast Vote\n");
        printf("3. View Results\n");
        printf("4. End Current Election\n");
        printf("5. Exit\n");
        printf("6. View Stored Results\n");
        printf("\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                setupElection();
                break;
            case 2:
                castVote();
                break;
            case 3:
                displayResults();
                printf("\nPress Enter to return to the main menu...\n");
                getchar(); // Pause
                getchar();
                break;
            case 4:
                endElection();
                break;
            case 5:
                printf("Exiting the system. Goodbye!\n");
                break;
            case 6:
                readElectionResults();
                printf("\nPress Enter to return to the main menu...\n");
                getchar();
                getchar();
                break;
            default:
                printf("Invalid choice. Please try again.\n");
                getchar(); // Pause
        }
    } while (choice != 5);

    return 0;
}