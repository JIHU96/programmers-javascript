def solution(babbling):
    answer = 0 
    
    print(1)
    
    babble = ["aya", "ye", "woo", "ma"]
    for bab_list in babbling:
        for text in babble:
            if text * 2 not in bab_list:
                bab_list = bab_list.replace(text, " ")
        if bab_list.strip() == "":
            answer += 1
    return answer