-- CreateTable
CREATE TABLE "Earnings" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "MovieID" INTEGER,
    "Domestic" INTEGER,
    "Worldwide" REAL,
    CONSTRAINT "Earnings_MovieID_fkey" FOREIGN KEY ("MovieID") REFERENCES "Movies" ("MovieID") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Genre" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "MovieID" INTEGER,
    "genre" TEXT,
    CONSTRAINT "Genre_MovieID_fkey" FOREIGN KEY ("MovieID") REFERENCES "Movies" ("MovieID") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Movies" (
    "MovieID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Title" TEXT,
    "Rating" DECIMAL,
    "TotalVotes" INTEGER,
    "MetaCritic" DECIMAL,
    "Budget" REAL,
    "Runtime" TEXT,
    "CVotes10" TEXT,
    "CVotes09" TEXT,
    "CVotes08" TEXT,
    "CVotes07" TEXT,
    "CVotes06" TEXT,
    "CVotes05" TEXT,
    "CVotes04" TEXT,
    "CVotes03" TEXT,
    "CVotes02" TEXT,
    "CVotes01" TEXT,
    "CVotesMale" TEXT,
    "CVotesFemale" TEXT,
    "CVotesU18" TEXT,
    "CVotesU18M" TEXT,
    "CVotesU18F" TEXT,
    "CVotes1829" TEXT,
    "CVotes1829M" TEXT,
    "CVotes1829F" TEXT,
    "CVotes3044" TEXT,
    "CVotes3044M" TEXT,
    "CVotes3044F" TEXT,
    "CVotes45A" TEXT,
    "CVotes45AM" TEXT,
    "CVotes45AF" TEXT,
    "CVotes1000" TEXT,
    "CVotesUS" TEXT,
    "CVotesnUS" TEXT,
    "VotesM" TEXT,
    "VotesF" TEXT,
    "VotesU18" TEXT,
    "VotesU18M" TEXT,
    "VotesU18F" TEXT,
    "Votes1829" TEXT,
    "Votes1829M" TEXT,
    "Votes1829F" TEXT,
    "Votes3044" TEXT,
    "Votes3044M" TEXT,
    "Votes3044F" TEXT,
    "Votes45A" TEXT,
    "Votes45AM" TEXT,
    "Votes45AF" TEXT,
    "VotesIMDB" TEXT,
    "Votes1000" TEXT,
    "VotesUS" TEXT,
    "VotesnUS" TEXT
);

