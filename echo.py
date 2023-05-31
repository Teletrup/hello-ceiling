import math

dist = [3/12, 4/12, 6/12, 8/12, 9/12, 12/12]
prop = [1, 2, 1, 2, 1, 3]
mag = [p / sum(prop) for p in prop]
smag = [sum(mag[:n]) for n, _ in enumerate(mag)] 
t = [180/math.pi * math.acos(1 - (m + s)) for m, s in zip(mag, smag)]
dt = [t[i] - t[i - 1] if i > 0 else t[0] for i in (range(len(t)))]

print(mag)
print(smag)
print(t)
print(dt)
