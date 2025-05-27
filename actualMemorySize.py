def actualMemorySize(num):
    actual_size = float(num[0:len(num) - 2])
    actual_size -= actual_size * 0.07
    if "GB" in str(num):
        if actual_size < 1:
            return (f"{(actual_size * 1000):.0f}MB")
        return (f"{actual_size:.2f}GB")
    elif "MB" in str(num):
        return(f"{actual_size:.0f}MB")

print(actualMemorySize("512MB"))