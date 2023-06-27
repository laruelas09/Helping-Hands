-- HELPPING HANDS

-- Globals
local activePlayer = nil
local helpingPlayers = nil

-- Helper functions
local function getActivePlayer()
    return activePlayer
end

local function getHelpingPlayers()
    return helpingPlayers
end

local function setActivePlayer(player)
    activePlayer = player
end

local function setHelpingPlayers(players)
    helpingPlayers = players
end

-- Main functions 
local function initialize()
    setActivePlayer(nil)
    setHelpingPlayers({})
end

local function startHelpingSession()
    local activePlayer = getActivePlayer()
    
    if activePlayer ~= nil then
        print("There is already an active player!")
        return
    end
    
    local player = input("Please enter the username of the active player: ")
    setActivePlayer(player)
    
    print("Helping session started!")
    print("Active player: " .. player)
    print()
end

local function endHelpingSession()
    local activePlayer = getActivePlayer()
    local helpingPlayers = getHelpingPlayers()
    
    if activePlayer == nil then
        print("There is no active player!")
        return
    end
    
    setActivePlayer(nil)
    print("Helping session ended!")
    print("Active player: " .. activePlayer)
    print("Helping players: " .. table.concat(helpingPlayers, ", "))
    print()
end

local function joinHelpingSession()
    local activePlayer = getActivePlayer()
    local helpingPlayers = getHelpingPlayers()
    
    if activePlayer == nil then
        print("There is no active player!")
        return
    end
    
    local player = input("Please enter your username: ")
    table.insert(helpingPlayers, player)
    
    setHelpingPlayers(helpingPlayers)
    print("Player " .. player .. " joined the helping session!")
    print()
end

local function leaveHelpingSession()
    local activePlayer = getActivePlayer()
    local helpingPlayers = getHelpingPlayers()
    
    if activePlayer == nil then
        print("There is no active player!")
        return
    end
    
    local player = input("Please enter your username: ")
    local found = false
    
    for i = #helpingPlayers, 1, -1 do
        if helpingPlayers[i] == player then
            table.remove(helpingPlayers, i)
            found = true
        end
    end
    
    setHelpingPlayers(helpingPlayers)
    if found then
        print("Player " .. player .. " left the helping session!")
    else
        print("Player " .. player .. " was not in the helping session!")
    end
    print()
end

-- Main loop 
initialize()

while true do
    print("Helping Hands")
    print("1. Start helping session")
    print("2. End helping session")
    print("3. Join helping session")
    print("4. Leave helping session")
    print("5. Exit")
    print()
    
    local choice = input("Please select an option: ")
    
    if choice == "1" then
        startHelpingSession()
    elseif choice == "2" then
        endHelpingSession()
    elseif choice == "3" then
        joinHelpingSession()
    elseif choice == "4" then
        leaveHelpingSession()
    elseif choice == "5" then
        print("Goodbye!")
        break
    else
        print("Invalid option. Please try again.")
        print()
    end
end